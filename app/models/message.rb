# == Schema Information
#
# Table name: messages
#
#  id        :bigint           not null, primary key
#  body      :string           not null
#  author_id :bigint           not null
#  chats_id  :bigint
#
class Message < ApplicationRecord
    belongs_to :chat,
    foreign_key: :chats_id,
    class_name: :Chat

    belongs_to :user,
    foreign_key: :author_id,
    class_name: :User
end
