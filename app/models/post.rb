# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  user_id    :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Post < ApplicationRecord
    validates :body,:user_id,presence: true

    belongs_to :user
    has_many :comments,
    dependent: :destroy

    has_many :likes, as: :likeable
    has_one_attached :photo

    def get_comment_nums 
        self.comments.length
    end

    def get_post_likes 
        self.likes.length
    end
    def get_name 
        us = self.user
        return us.first_name + " " + us.last_name
    end

    def get_time 
        self.created_at.strftime("%B %d %Y")
    end

end
