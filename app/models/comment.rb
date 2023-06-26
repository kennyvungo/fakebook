# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  post_id    :bigint           not null
#  user_id    :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Comment < ApplicationRecord
  validates :body, presence: true
  
  belongs_to :post
  belongs_to :user
  has_many :likes, as: :likeable

  def get_name 
    us = self.user
    return us.first_name + " " + us.last_name
  end

  def get_comment_likes 
    self.likes.length
  end
end
