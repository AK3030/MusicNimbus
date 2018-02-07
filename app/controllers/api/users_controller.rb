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

  def update
    # if (params[:id] == current_user.id)
      @user = User.find_by(id: params[:id])
      @user.update(user_params)
      render :show
    # else
    #   render json: ["wrong user"], status: 404
    # end
  end

  def index
    @users = User.all
  end

  def user_params
    params.require(:user).permit(:username, :password, :email, :image, :header_image, :location, :name)
  end
end
