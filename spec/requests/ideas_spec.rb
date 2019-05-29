require "rails_helper"

RSpec.describe "Todos API", type: :request do
  let!(:user) { create(:user) }
  let!(:user2) { create(:user) }
  let!(:ideas) { create_list(:idea, 10, user_id: user.id) }
  let!(:ideas2) { create_list(:idea, 10, user_id: user2.id) }
  let(:idea_id) { ideas.first.id }
  let(:user_id) { user.id}
  let(:headers) { valid_headers }

  describe "GET /ideas" do
    before { get "/api/ideas", params: {}, headers: headers }

    it "returns ideas" do
      expect(json).not_to be_empty
      expect(json["ideas"].size).to eq(10)
    end

    it "returns status code 200" do
      expect(response).to have_http_status(200)
    end
  end

  describe "POST /ideas" do
    let(:valid_attributes) do
      attributes_for(:idea)
    end
    context "when request is valid" do
      before { post "/api/ideas", params: valid_attributes, headers: headers }
      it "creates a todo" do
        expect(json["idea"]["title"]).not_to eq("")
        expect(json["idea"]["user_id"]).to eq(user.id)
      end

      it "returns status code 201" do
        expect(response).to have_http_status(201)
      end
    end

    context "when the request is invalid" do
      before { post "/api/ideas", params: { title: nil }, headers: headers }

      it "returns status code 422" do
        expect(response).to have_http_status(422)
      end

      it "returns a validation failure message" do
        expect(response.body)
          .to match(/Title can't be blank/)
      end
    end


  end

  describe "PUT /ideas" do
    let(:valid_attributes) { {title: "Churros Restaurant" }}
    context "when the record exists" do
      before { put "/api/ideas/?id=#{idea_id}", params: valid_attributes, headers: headers }
      it "updates the record" do
        expect(json["idea"]["title"]).to eq("Churros Restaurant")
      end

      it "returns status code 200" do
        expect(response).to have_http_status(200)
      end
    end

  end

  describe "DELETE /ideas" do
    before { delete "/api/ideas/?id=#{idea_id}", params: {}, headers: headers }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end
