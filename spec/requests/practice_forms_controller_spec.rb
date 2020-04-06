require "rails_helper"

RSpec.describe PracticeFormsController, type: :request do
  describe "#create" do
    let(:practice) { FactoryBot.create(:practice) }
    let(:params) do
      {
        practice_form: {
          first_name: Faker::Name.first_name,
          last_name: Faker::Name.last_name,
          email: Faker::Internet.email,
          ppsn: "12312312W",
          phone: Faker::PhoneNumber.cell_phone_with_country_code,
          dob: Faker::Date.birthday,
          address_1: Faker::Address.full_address,
          city: Faker::Address.city,
          county: IRELAND_COUNTIES.first,
          postcode: Faker::Address.zip_code,
          fever: "1",
          cough: "1",
          shortness_of_breath: "0",
          sore_throat: "0",
          runny_nose: "0",
          diarrhoea: "0",
          aches_pains: "0",
          vomiting: "1",
          fatigue: "0",
          sudden_loss_of_sense_of_smell: "0",
          headache: "0"
        }
      }
    end

    it "create practice form successfully with valid params" do
      sign_in practice
      expect  do
        post submit_practice_form_path(practice),
             params: params
      end.to change {
        PracticeForm.count
      }.by(1)
    end
  end
end
