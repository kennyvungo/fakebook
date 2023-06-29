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
  belongs_to :talker
  belongs_to :talkee
end
