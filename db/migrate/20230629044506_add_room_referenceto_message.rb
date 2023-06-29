class AddRoomReferencetoMessage < ActiveRecord::Migration[7.0]
  def change
    add_reference :messages, :chats, index: true
  end
end
