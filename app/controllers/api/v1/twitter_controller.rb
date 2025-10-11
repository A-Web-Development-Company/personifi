class Api::V1::TwitterController < ApplicationController
  def recent
    service = TwitterService.new("_malikfelix") # TODO: Make this dynamic
    tweets = service.get_tweets
    render json: tweets
  end
end
