Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post 'api/test', to: 'application#test'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index,:create,:update,:show]
    resource :session, only: [:show, :create, :destroy]
    resources :posts,only:[:index,:show,:create,:destroy,:update]
    resources :comments,only:[:index,:show,:create,:destroy]
    resources :likes, only:[:index,:show,:create,:destroy]
  end
  get '*path', to: "static_pages#frontend_index"
end
