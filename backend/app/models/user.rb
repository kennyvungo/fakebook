# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  before_validation :ensure_session_token

  validates :username,length: {in: 3..30},uniqueness: true, format:{ without: URI::MailTo::EMAIL_REGEXP,message: "username can't be an email"}
  validates :email,length: {in: 3..255},format:{ with: URI::MailTo::EMAIL_REGEXP },uniqueness: true
  validates :password, length:{in: 6..255}, allow_nil: true
  validates :session_token, presence: true, uniqueness: true
  
  
  
  has_secure_password



  private
  def generate_unique_session_token

  end

  def ensure_session_token

  end
end
