# == Schema Information
#
# Table name: users
#
#  id                        :integer          not null, primary key
#  username                  :string           not null
#  password_digest           :string           not null
#  session_token             :string           not null
#  email                     :string           not null
#  created_at                :datetime         not null
#  updated_at                :datetime         not null
#  image_file_name           :string
#  image_content_type        :string
#  image_file_size           :integer
#  image_updated_at          :datetime
#  header_image_file_name    :string
#  header_image_content_type :string
#  header_image_file_size    :integer
#  header_image_updated_at   :datetime
#  location                  :string
#  name                      :string
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
