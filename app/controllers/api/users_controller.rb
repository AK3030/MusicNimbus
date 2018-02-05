class Api::UsersController < ApplicationController
  def create
    @user = User.new(username: user_params[:username], password:user_params[:password], email:user_params[:email])
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    p params
    @user = User.find_by(id: params[:id])

  end

  def index
    @users = User.all
  end

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
