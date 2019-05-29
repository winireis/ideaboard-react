require 'rails_helper'

RSpec.describe User, type: :model do
  # Associations test
  # ensure User model has a 1:m relationship with the Idea model
  it { should have_many(:ideas) }
  # Validations tests
  # ensure username and password_digest are present before save
  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:password_digest) }
end
