class Api::FriendsController < ApplicationController
    def index 
        @friends = Friend.all
        render json: @friends
    end 

    def create 
        @friend = Friend.new(friend_params)
        if(@friend.save)
            render json: :show
        else 
            render json: {errors:@friend.errors.full_messages},status: 422
        end
    end 

    def destroy 
        @friend = Friend.find(params[:id])
        @friend.destroy
        head :no_content
    end

    def friend_params 
        params.require(:friend).permit(:user_id,:friend_id)
    end
end
