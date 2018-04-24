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

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, :session_token, uniqueness: true

  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  has_attached_file :header_image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :header_image, content_type: /\Aimage\/.*\z/

  has_many :tracks

  after_initialize :ensure_session_token
  after_initialize :ensure_email

  attr_reader :password

  def ensure_email
    self.email ||= "place holder"
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.user_search(query)
    User.where('LOWER(users.username) LIKE ?', "%#{query}%")
  end

  def generate_session_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def self.find_by_credentials(username,password)
    user = User.find_by(username: username)
    if user && user.is_password?(password)
      return user
    else
      return nil
    end

  end
end
