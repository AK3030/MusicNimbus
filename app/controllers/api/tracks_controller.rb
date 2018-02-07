class Api::TracksController < ApplicationController
  def show
    @track = Track.find_by(id: params[:id])
  end

  def index
    @tracks = Track.all
  end

  def track_params
    params.require(:track).permit(:track_name, :audio)
  end
end
