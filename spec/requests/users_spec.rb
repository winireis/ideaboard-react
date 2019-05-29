require 'rails_helper'

RSpec.describe 'Users API' do
  let(:user) { build(:user) }
  let(:valid_attributes) do
    attributes_for(:user)
  end

  # User signup test suite
  describe 'POST /api/signup' do
    context 'when valid request' do
      before { post '/api/signup', params: valid_attributes }
      it 'creates a new user' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when invalid request' do
      before { post '/api/signup', params: {} }
      it 'does not create a new user' do
        expect(response).to have_http_status(422)
      end
    end
  end
end
