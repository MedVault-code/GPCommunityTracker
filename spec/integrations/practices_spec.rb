# frozen_string_literal: true

require 'rails_helper'

describe 'practices page', type: :feature do
  it 'should create practice successfully when fill in correct information', js: true do
    visit(new_practice_registration_path)

    within('#new_practice') do
      fill_in 'practice[first_name]', with: Faker::Name.first_name
      fill_in 'practice[last_name]', with: Faker::Name.last_name
      fill_in 'practice[practice_full_name]', with: Faker::Name.name
      fill_in 'practice[email]', with: 'user1@test.com'
      fill_in 'practice_email_confirmation', with: 'user2@test.com'
      fill_in 'practice[practice_phone]', with: Faker::PhoneNumber.cell_phone_with_country_code
      fill_in 'practice[password]', with: Faker::Internet.password
      fill_in 'practice[practice_name]', with: Faker::Name.name
      fill_in 'practice[address]', with: Faker::Address.full_address
      select 'Antrim', from: 'practice[county]'
      click_button 'Create Account'
    end

    expect(page.driver.browser.switch_to.alert.text).to eq('Email confirmation not matching.')

    page.driver.browser.switch_to.alert.accept
    fill_in 'practice_email_confirmation', with: 'user1@test.com'

    expect do
      click_button 'Create Account'
    end.to change { Practice.count }.by(1)
  end
end
