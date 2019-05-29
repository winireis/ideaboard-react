Rails.application.routes.draw do
  scope '/api' do
    post '/signup', to: 'users#create'
    post '/login', to: 'authentications#login'
  end
end
