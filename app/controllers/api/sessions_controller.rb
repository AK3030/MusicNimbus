class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid credentials"], status: 401
    end
  end

  def destroy
    if logged_in?
      @user = current_user
      logout
      render 'api/users/show'
    else
      render json: ["No one was logged in"], status: 404
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
