class Api::FriendsController < ApplicationController
    def index 
        @friends = Friend.all
        render :index
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

    end

    def friend_params 
        params.require(:friends).permit(:user_id,:friend_id)
    end
end
