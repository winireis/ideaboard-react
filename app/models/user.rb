class User < ApplicationRecord
  has_secure_password
  has_many :ideas

  validates :username, presence: true, uniqueness: true
  validates :password_digest, presence: true
end
