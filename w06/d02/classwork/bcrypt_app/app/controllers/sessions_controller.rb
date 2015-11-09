class SessionsController < ApplicationController
  def new
  end

  def create
    # User puts in email and password
    # and create new session if they match
    user = User.find_by(email: params[:email])
  
    if user && user.authenticate(params[:session])
      session[:user_id] = user.id
      redirect_to root_path
    else
      redirect_to "/login"
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end
end
