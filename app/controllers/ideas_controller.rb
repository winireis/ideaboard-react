class IdeasController < ApplicationController
  before_action :authorize_request
  before_action :set_idea, only: [:update, :delete]

  # GET api/ideas
  def index
    @ideas = @current_user.ideas
    render json: { ideas: @ideas }, status: :ok
  end

  # POST api/ideas
  def create
    @idea = @current_user.ideas.create(idea_params)
    if @idea.save
      render json: { idea: @idea }, status: :created
    else
      render json: { errors: @idea.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT api/ideas/1
  def update
    if @idea.update(idea_params)
      render json: { idea: @idea }, status: :ok
    else
      render json: { errors: @idea.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # DELTE api/ideas/1
  def delete
    if @idea.destroy
      render json: { }, status: :no_content
    else
      render json: { }, status: :unprocessable_entity
    end
  end

  private

  def set_idea
    @idea = @current_user.ideas.find(params[:id])
  end

  def idea_params
    params.permit(:title, :description)
  end
end
