require 'rails_helper'

describe "static page home", type: :feature do
  it "has basic content" do
    visit(root_path)
    expect(page).to have_content "COVID-19 GP Screening Form"
    expect(page).to have_content "We are a small practice in Cork city with no practice website."
  end
end
