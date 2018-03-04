class Api::TracksController < ApplicationController
  def show
    @track = Track.find_by(id: params[:id])
  end

  def index
    if params[:user_id]
      p "helllooo - -- - -- --- - ---"

      @tracks = Track.get_tracks_by_user_id(params[:user_id])
    else
      @tracks = Track.last(10)
    end
  end

  def create

    audio = track_params[:audio]
    audio = nil if audio == "null"
    image = track_params[:image]
    image = nil if image == "undefined"
    user_id = track_params[:user_id]
    @track = Track.new(track_name: track_params[:track_name], audio: audio, image: image, user_id: user_id)

    p @track
    if @track.save
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end

  end

  def update
    # if params[:user_id] == current_user.id.to_s
    # p "hello o oo  - -- - -- - -"

    # track_params[:audio] = nil if track_params[:audio]
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
