class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user, :signed_in?, :sign_in!, :require_signed_in!, :safe_show, :get_user

  private

  def current_user
    return nil unless session[:token]
    @current_user ||= User.find_by_session_token(session[:token])
  end

  def signed_in?
    !!current_user
  end

  def sign_in!(user)
    @current_user = user
    session[:token] = user.reset_token!
  end

  def sign_out!
    current_user.try(:reset_token!)
    session[:token] = nil
  end

  def require_signed_in!
    redirect_to root_url unless signed_in?
  end

  def safe_show
    badges = Badge.all.collect do |badge|
      badge.safe_show
    end

    students = Student.all.collect do |student|
      student.safe_show
    end

    {
      badges: badges,
      students: students
    }
  end

  def get_user
    {
      current_user: current_user
    }
  end
end
