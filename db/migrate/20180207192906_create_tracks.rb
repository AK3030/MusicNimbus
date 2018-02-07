class CreateTracks < ActiveRecord::Migration[5.1]
  def change
    create_table :tracks do |t|
      t.string :track_name, null:false
      t.integer :user_id, null:false
      t.text :description

      t.timestamps
    end
  end
end
