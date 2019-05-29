Rails.application.routes.draw do
  scope '/api' do
    post '/signup', to: 'users#create'
  end
end
