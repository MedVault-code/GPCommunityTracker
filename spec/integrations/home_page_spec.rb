require 'rails_helper'

describe "static page home", type: :feature do
  it "has basic content" do
    visit(root_path)
    expect(page).to have_content "COVID-19 GP Screening Form"
  end
end
