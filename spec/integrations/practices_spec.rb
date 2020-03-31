require 'rails_helper'

describe "practices page", type: :feature do
  it "should can't create practice if uncheck terms and conditions checkbox", js: true do
    visit(new_practice_registration_path)
    expect(page).to have_content "Agree to terms and conditions."

    within("#new_practice") do
      fill_in "practice[first_name]", with: Faker::Name.first_name
      fill_in "practice[last_name]", with: Faker::Name.last_name
      fill_in "practice[email]", with: Faker::Internet.email
      fill_in "practice[practice_phone]", with: Faker::PhoneNumber.cell_phone_with_country_code
      fill_in "practice[password]", with: Faker::Internet.password(min_length: 8)
      fill_in "practice[practice_name]", with: Faker::Name.first_name
      fill_in "practice[address]", with: Faker::Address.full_address
    end

    expect do
      click_button "Create Account"
    end.not_to change { Practice.count }

    find("#agree_term_condition_label").click

    expect do
      click_button "Create Account"
    end.to change { Practice.count }.by(1)
  end
end
