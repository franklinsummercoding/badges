module Api
  class BadgesController < ApplicationController
    def create
      @badge = Badge.new(badge_params)
      if @badge.save
        render json: User.safe_show
      else
        render json: User.safe_show
      end
    end

    def destroy
      @badge = Badge.find(params[:id])
      @badge.try(:delete)
      render json: User.safe_show
    end

    def badge_params
      params.require(:badge).permit(:title, :description)
    end
  end
end
