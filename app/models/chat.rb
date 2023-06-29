# == Schema Information
#
# Table name: chats
#
#  id         :bigint           not null, primary key
#  talker_id  :bigint           not null
#  talkee_id  :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Chat < ApplicationRecord
  belongs_to :talker,
  foreign_key: :talker_id,
  class_name: :User

  belongs_to :talkee,
  foreign_key: :talkee_id,
  class_name: :User

  has_many :messages,
  foreign_key: :chats_id,
  dependent: :destroy,
  class_name: :Message
end
