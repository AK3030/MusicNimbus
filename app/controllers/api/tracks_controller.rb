class Api::TracksController < ApplicationController
  def show
    @track = Track.find_by(id: params[:id])
  end

  def index
    p 'helloooo- -- ---  -- -'
    p !!params[:user_id]
    if params[:user_id]
      @tracks = Track.get_tracks_by_user_id(params[:user_id])
    else
      @tracks = Track.all
    end
  end

  # def track_params
  #   params.require(:track).permit(:track_name, :audio)
  # end
end
