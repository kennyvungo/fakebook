# == Schema Information
#
# Table name: pendingfriends
#
#  id          :bigint           not null, primary key
#  friender_id :bigint           not null
#  friendee_id :bigint           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Pendingfriend < ApplicationRecord
  belongs_to :friender,
  foreign_key: :friender_id,
  class_name: :User

  belongs_to :friendee,
  foreign_key: :friendee_id,
  class_name: :User
end
