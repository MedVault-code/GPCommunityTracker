Rails.application.routes.draw do
  devise_for :practices

  get '/:practice', to: 'practice_forms#new', as: 'new_practice_form'
  post '/:practice/submit', to: 'practice_forms#create', as: 'submit_practice_form'
  get '/:practice/complete', to: 'practice_forms#complete', as: 'practice_form_complete'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "pages#home"
end
