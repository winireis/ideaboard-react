class UsersController < ApplicationController
  # PUT /users
  def create
    @user = User.new(user_params)
    if @user.save
      render json: { username: @user.username }, status: :created
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end
end
