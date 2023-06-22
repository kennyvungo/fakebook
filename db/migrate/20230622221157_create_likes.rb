class CreateLikes < ActiveRecord::Migration[7.0]
  def change
    create_table :likes do |t|
      t.string :likeable_type, null: false
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
