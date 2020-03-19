Rails.application.routes.draw do
  devise_for :practices, :controllers => {
    :registrations => "practices/registrations",
    :sessions => "practices/sessions",
    :confirmations => "practices/confirmations"
  }

  # Admins
  devise_for :admins, path: "admin", controllers: {
    sessions: "admins/sessions",
    passwords: "admins/passwords",
  }

  namespace :admins, path: "admin" do
    resources :practices
    root to: "practices#index"
  end

  get '/:practice', to: 'practice_forms#new', as: 'new_practice_form'
  post '/:practice/submit', to: 'practice_forms#create', as: 'submit_practice_form'
  get '/:practice/complete', to: 'practice_forms#complete', as: 'practice_form_complete'

  root to: "pages#home"
end
