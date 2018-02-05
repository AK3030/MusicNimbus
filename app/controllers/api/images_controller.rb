class Api::ImagesController < ApplicationController

  def show
    render json: params
  end

  def create
    p params
    render json: ["success"]
  end

  def image_params
    params
  end
end
