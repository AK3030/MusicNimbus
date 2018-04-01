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
    @user = User.find_by(id: params[:id])
  end

  def update
    if params[:id] == current_user.id.to_s
      @user = User.find_by(id: params[:id])
      if @user.update(user_params)
        render :show
      else
        render json: @user.errors.full_messages, status: 401
      end
    else
      render json: ["wrong user"], status: 422
    end
  end

  def index

    if params[:track_id]
      tracks_with_comments = Comment.where(track_id: params[:track_id]).includes(:user)
      @users = []
      tracks_with_comments.each do |track|
        @users << track.user
      end
    else
      # avoid n+1 queries with includes
      recent_tracks = Track.includes(:user).last(6)

      @users = []
      recent_tracks.each do |track|
        @users << track.user
      end
    end
  end

  def user_params
    params.require(:user).permit(:username, :password, :email, :image, :header_image, :location, :name)
  end
end
