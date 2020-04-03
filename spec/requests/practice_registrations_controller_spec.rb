require "rails_helper"

RSpec.describe Practices::RegistrationsController, type: :request do
  describe "#create" do
    let(:valid_params) do
      {
        practice: {
          first_name: Faker::Name.first_name,
          last_name: Faker::Name.last_name,
          email: Faker::Internet.email,
          password: Faker::Internet.password,
          practice_name: Faker::Name.first_name,
          practice_phone: Faker::PhoneNumber.cell_phone_with_country_code,
          county: "Antrim",
          address: Faker::Address.full_address
        },
      }
    end

    let(:invalid_params) do
      {
        practice: {
          first_name: Faker::Name.first_name,
          last_name: Faker::Name.last_name,
          email: Faker::Internet.email,
          password: Faker::Internet.password,
          practice_name: Faker::Name.name,
          practice_full_name: Faker::Name.name,
          practice_phone: Faker::PhoneNumber.cell_phone_with_country_code,
          address: Faker::Address.full_address
        },
      }
    end

    it "create practice successfully with valid params" do
      expect  do
        post practice_registration_path,
             params: invalid_params
      end.not_to change {
        Practice.count
      }
    end

    it "create practice fail with invalid params" do
      expect  do
        post practice_registration_path,
             params: valid_params
      end.to change {
        Practice.count
      }.by(1)
    end
  end
end