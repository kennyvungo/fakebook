# == Schema Information
#
# Table name: messages
#
#  id        :bigint           not null, primary key
#  body      :string           not null
#  author_id :bigint           not null
#
class Message < ApplicationRecord
end
