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
    if (params[:id] == current_user.id.to_s)
      p "hello -------- - - -"
      p params[:id]
      p current_user.id
      @user = User.find_by(id: params[:id])
      if @user.update(user_params)
        render :show
      else
        p @user.errors.full_messages
        render json: @user.errors.full_messages, status: 401
      end
    else
      render json: ["wrong user"], status: 422
    end
  end

  def index
    @users = User.all
  end

  def user_params
    params.require(:user).permit(:username, :password, :email, :image, :header_image, :location, :name)
  end
end
