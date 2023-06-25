class Api::LikesController < ApplicationController
    def index 
        @likes = Like.all 
        render :index
    end

    def show 
        @like = Like.find(params[:id])
        render :showpost
    end

    def create 
        @like = Like.new(like_params)
        if @like.save 
            if @like.likeable_type == "Post"
                render :showpost    
            else
                render :showcomment
            end
        else
            render json: {errors:@like.errors.full_messages},status: 422
        end
    end 

    def destroy 
        @like = Like.find(params[:id])
        # @post = @like.likeable
        @like.destroy
        # render :deletepost
    end

    private 
    def like_params 
        params.require(:like).permit(:user_id,:likeable_id,:likeable_type)
    end
end
