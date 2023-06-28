class Api::PendingfriendsController < ApplicationController
    def index 
        @friends = Pendingfriend.all
        render :index
    end 

    def create 
        @friend = Pendingfriend.new(friend_params)
        if(@friend.save)
            render json: @friend
        else 
            render json: {errors:@friend.errors.full_messages},status: 422
        end
    end 

    def destroy 
        @friend = Pendingfriend.find(params[:id])
        @friend.destroy
        head :no_content
    end
    def friend_params 
        params.require(:pendingfriend).permit(:friender_id,:friendee_id)
    end

end
