

class UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in!(@user)
      redirect_to root_url
    else
      render json: @user.errors.full_messages
    end
  end

  def update
    @user = current_user

    if @user.update_attributes(user_params)
      render json: @user.safe_show
    else
      render json: @user.errors.full_messages
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :password)
  end
end
