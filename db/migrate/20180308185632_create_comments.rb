class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false
      t.integer :track_id, null: false
      t.text :body, null: false
      t.integer :timestamp, null: false

      t.timestamps
    end
  end
end
