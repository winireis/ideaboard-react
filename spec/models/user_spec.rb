require 'rails_helper'

RSpec.describe User, type: :model do
  # Validation tests
  # ensure username and password_digest are present before save
  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:password_digest) }
end
