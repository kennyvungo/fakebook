class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password']
  def index 
    @users = User.all 
    render :index
  end
  def show 
    @user = User.find(params[:id])
    render :show 
  end

  def create
    @user = User.new(user_params)
    if @user.save
      Friend.create(user_id: @user.id, friend_id: 1)
      Friend.create(user_id: @user.id, friend_id: 2)
      Friend.create(user_id: @user.id, friend_id: 3)
      Friend.create(user_id: @user.id, friend_id: 4)
      Friend.create(user_id: @user.id, friend_id: 5)
      Friend.create(user_id: @user.id, friend_id: 6)
      Friend.create(user_id: @user.id, friend_id: 7)
      Friend.create(user_id: @user.id, friend_id: 8)
      Friend.create(user_id: @user.id, friend_id: 9)
      Friend.create(user_id: @user.id, friend_id: 10)
      login!(@user)
      render :show
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update 
    @user = User.find(params[:id])
    if @user.update(user_params)
      render :show 
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end

  end
  private

  def user_params
    params.require(:user).permit(:email, :password,:first_name,:last_name,:avatar,:cover)
  end
end