class PolyLikes < ActiveRecord::Migration[7.0]
  def change
    add_column :likes, :likeable_id, :bigint
    add_index :likes,[:user_id, :likeable_id,:likeable_type],unique: true 
    add_index :likes,[:likeable_id,:likeable_type]
  end
end
