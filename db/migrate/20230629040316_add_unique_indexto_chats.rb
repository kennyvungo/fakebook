class AddUniqueIndextoChats < ActiveRecord::Migration[7.0]
  def change
    add_index :chats,[:talker_id,:talkee_id],unique: true
  end
end
