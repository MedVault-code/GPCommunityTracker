require 'rails_helper'

describe "static page home", type: :feature do
  it "has basic content" do
    visit(root_path)
    expect(page).to have_content "COVID-19 GP Screening Form"
    expect(page).to have_content "Two minutes to setup - No website needed"
    expect(page).to have_content "Join the over 300 practices across Ireland already using screening form today"
    expect(page).to have_content "Supported by the HSE Spark Innovation Program"
  end
end
