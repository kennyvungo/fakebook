class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password']
  
  def create
  end

  def user_params
    params.require(:user).permit(:email,:password,:first_name,:last_name)
  end
end
