require 'rails_helper'

RSpec.describe 'Authentications API' do
  let!(:user) { create(:user) }

  # User login test suite
  describe 'POST /api/login' do
    context 'when valid request' do
      before { post '/api/login', params: {username: user.username, password: user.password} }
      it 'auth user' do
        expect(response).to have_http_status(200)
        expect(json['token']).not_to be_nil
      end
    end

    context 'when invalid request' do
      before { post '/api/login', params: {username: user.username, password: "bar" } }
      it 'does not auth user' do
        expect(response).to have_http_status(401)
      end
    end
  end
end
