Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index, :update]
    resource :session, only: [:create, :destroy]
    resources :tracks, only: [:show, :create, :index]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
