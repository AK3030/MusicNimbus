class Api::UsersController < ApplicationController
  def create
    # p "helloo -- - -- - -- - "
    # p params[:image][:image]
    # @user = User.first
    # @user.image = params[:image][:image]
    # @user.save
    # p User.first.image.url
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
    # p " - - - --- - - -- -- - -- - -- - -"
    # p params
    # @user = User.find_by(id: 2)
    # @user.update_attributes(image: params)

  end

  def index
    @users = User.all
  end

  def user_params
    params.require(:user).permit(:username, :password, :email, :image)
  end
end
