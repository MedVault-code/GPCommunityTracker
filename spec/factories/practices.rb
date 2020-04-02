# frozen_string_literal: true

FactoryBot.define do
  factory :practice do
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    email { Faker::Internet.email }
    password { Faker::Internet.password }
    practice_name { Faker::Name.name }
    practice_full_name { Faker::Name.name }
    practice_phone { Faker::PhoneNumber.cell_phone_with_country_code }
    address { Faker::Address.full_address }
    county { 'Dublin 8' }
  end
end
