require 'rails_helper'

describe "admin practices", type: :feature do
  password = Faker::Internet.password
  let(:admin) { FactoryBot.create(:admin, password: password) }
  let(:practice) { FactoryBot.create(:practice, county: "Antrim") }

  context "view/edit practice" do
    it "should view county in practice admin" do
      visit(edit_admins_practice_path(practice))
      login_admin_form(admin)
      expect(page).to have_content "County"
      expect(page).to have_content "Antrim"
    end

    it "should can update county in practice admin" do
      visit(edit_admins_practice_path(practice))
      login_admin_form(admin)

      expect do
        select "Cavan", from: "practice[county]"
        click_button "Save"
        expect(page).to have_content("Practice successfully updated")
        practice.reload
      end.to change { practice.county }.from("Antrim").to("Cavan")
    end
  end
end