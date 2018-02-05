class AddAttachmentHeaderImageToUsers < ActiveRecord::Migration[5.1]
  def self.up
    change_table :users do |t|
      t.attachment :header_image
    end
  end

  def self.down
    remove_attachment :users, :header_image
  end
end
