class CreatePendingfriends < ActiveRecord::Migration[7.0]
  def change
    create_table :pendingfriends do |t|
      t.references :friender, null: false, foreign_key: {to_table: :users}
      t.references :friendee, null: false, foreign_key: {to_table: :users}
      t.timestamps
    end
  end
end
