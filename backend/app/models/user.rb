# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  before_validation :ensure_session_token

  validates :email,length: {in: 3..255},format:{ with: URI::MailTo::EMAIL_REGEXP },uniqueness: true
  validates :password, length:{in: 6..255}, allow_nil: true
  validates :session_token, presence: true, uniqueness: true
  
  
  
  has_secure_password

  def self.find_by_credentials(email,password)
    user = User.find_by(email: email)
    
    if user && user.authenticate(password)
      return user
    end
  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    self.save!
    self.session_token
  end

  private
  def generate_unique_session_token
    loop do
      session_token = SecureRandom::urlsafe_base64(16)
      return session_token unless User.exists?(session_token: session_token)
    end
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end
end
