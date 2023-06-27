class Api::PendingfriendsController < ApplicationController
    def index 
        @friends = Pendingfriend.all
        render :index
    end 

    def create 
        @friend = Pendingfriend.new(friend_params)
        if(@post.save)
            render json: :show
        else 
            render json: {errors:@friend.errors.full_messages},status: 422
        end
    end 


    def destroy 

    end
    def friend_params 
        params.require(:friends).permit(:friender_id,:friendee_id)
    end

end
