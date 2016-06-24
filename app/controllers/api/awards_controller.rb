module Api
  class AwardsController < ApplicationController
    def create
      @award = Award.new(award_params)
      if @award.save
        render json: User.safe_show
      else
        render json: User.safe_show
      end
    end

    def destroy
      @award = Award.where(student_id: params[:award][:student_id], badge_id: params[:award][:badge_id])
      @award[0].try(:delete)
      render json: User.safe_show
    end

    def award_params
      params.require(:award).permit(:student_id, :badge_id)
    end
  end
end
