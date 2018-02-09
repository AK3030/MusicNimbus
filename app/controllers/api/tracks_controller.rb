class Api::TracksController < ApplicationController
  def show
    @track = Track.find_by(id: params[:id])
  end

  def index
    if params[:user_id]
      @tracks = Track.get_tracks_by_user_id(params[:user_id])
    else
      @tracks = Track.all
    end
  end

  def create
    @track = Track.new(track_params)
    if @track.save!
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end

  end

  def update
    # if params[:user_id] == current_user.id.to_s
    # p "hello o oo  - -- - -- - -"
    p "hello--- - -- - "
    p track_params[:track_name]
    @track = Track.find_by(id: params[:id])
    # p @track.track_name
    if @track.user_id == current_user.id
      if @track.update(track_params)
        render :show
      else
        render @track.errors.full_messages, status, 401
      end
    else
      render json: ["wrong user"], status: 422
    end

  end

  def track_params
    params.require(:track).permit(:track_name, :audio, :image, :user_id)
  end
end
