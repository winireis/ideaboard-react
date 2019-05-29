FactoryBot.define do
  factory :idea do
    title { Faker::Lorem.word }
    description { Faker::Lorem.paragraph }
    user_id { 1 }
  end
end
