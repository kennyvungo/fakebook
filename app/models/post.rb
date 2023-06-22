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

    def get_comment_nums 
        self.comments.length
    end

    def get_comments 
        self.comments
    end
end
