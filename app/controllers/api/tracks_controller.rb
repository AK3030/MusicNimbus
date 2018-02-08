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
    p "hello -- - -- - - - -"
    p track_params[:user_id]
    p track_params[:audio]
    @track = Track.new(track_params)
    if @track.save!
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end

  end

  def track_params
    params.require(:track).permit(:track_name, :audio, :image, :user_id)
  end
end
