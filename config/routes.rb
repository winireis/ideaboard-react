Rails.application.routes.draw do
  scope '/api' do
    post '/signup', to: 'users#create'
    post '/login', to: 'authentications#login'
    #resources :ideas, only: [:index, :create, :update, :destroy]
    get '/ideas', to: 'ideas#index'
    post '/ideas', to: 'ideas#create'
    put '/ideas', to: 'ideas#update'
    delete '/ideas', to: 'ideas#delete'
  end
end
