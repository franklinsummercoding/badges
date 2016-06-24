Rails.application.routes.draw do
  root to: 'pages#home'
  get 'signin', to: 'pages#sign_in'
  get 'logout', to: 'pages#sign_out'

  resources :users, only: [:create, :update, :show]
  resource :session, only: [:create, :new, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :awards, only: [:create, :destroy]
    resources :badges, only: [:create, :destroy]
    resources :students, only: [:create, :destroy]
  end
end
