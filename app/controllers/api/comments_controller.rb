class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(body: comment_params[:body], user_id: comment_params[:user_id], timestamp: comment_params[:timestamp])
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def show
    @comment = Comment.find_by(id: params[:id])
  end

  def index
    if params[:track_id]
      @comments = Comment.get_comment_by_track_id(params[:track_id])
    else
      @comments = Comment.last(6)
    end

  end

  def comment_params
    params.require(:comment).permit(:track_id, :user_id, :body, :timestamp)

  end
end
