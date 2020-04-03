module AuthenticationHelpers
  def login_admin_form(admin)
    within("#new_admin") do
      fill_in "admin[email]", with: admin.email
      fill_in "admin[password]", with: admin.password
      click_button "Log in"
    end
  end
end
