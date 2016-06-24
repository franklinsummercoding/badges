module Api
  class StudentsController < ApplicationController
    def create
      @student = Student.new(student_params)
      @student.avatar = Faker::Avatar.image
      if @student.save
        render json: User.safe_show
      else
        render json: User.safe_show
      end
    end

    def student_params
      params.require(:student).permit(:fname, :lname)
    end
  end
end
