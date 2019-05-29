require 'rails_helper'

RSpec.describe Idea, type: :model do
  # Association test
  # ensure an item record belongs to a single user record
  it { should belong_to(:user) }
  # Validation test
  # ensure column title is present before saving
  it { should validate_presence_of(:title) }
end
