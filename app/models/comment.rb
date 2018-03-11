# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  track_id   :integer          not null
#  body       :text             not null
#  timestamp  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :user_id, :track_id, :body, :timestamp, presence: true

  belongs_to :user
  belongs_to :track

  def self.get_comment_by_track_id(track_id)
    Comment.where(track_id: track_id)
  end

end
