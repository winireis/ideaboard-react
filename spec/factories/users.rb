FactoryBot.define do
  factory :user do
    username { Faker::Creature::Animal.name }
    password { 'foobar' }
    password_confirmation { 'foobar' }
  end
end
