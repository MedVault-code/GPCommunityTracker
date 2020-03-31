require "rails_helper"

RSpec.describe Admins::PracticesController, type: :request do
  let(:admin) { FactoryBot.create(:admin) }
  let(:practice) { FactoryBot.create(:practice, county: "Antrim") }

  describe "#update" do
    let(:params) do
      {
        practice: {
          county: "Cavan"
        },
      }
    end

    it "should have the updated object" do
      sign_in admin
      put admins_practice_path(practice),
          params: params

      expect(practice.reload.county).to eq "Cavan"
    end
  end
end