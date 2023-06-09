class Api::PostsController < ApplicationController
    def index 
        @posts = Post.all 
        render :index
    end
    
    def show
        @post= Post.find(params[:id])
        render json: :show
    end

    def create
        @post = Post.new(post_params)
        if @post.save 
            render json: :show
        else
            render json: {errors:@post.errors.full_messages},status: 422
        end
    end

    def update
        @post = Post.find(params[:id])
        if @post.update(post_params)
            render json: :show
        else  
            render json: {errors:@post.errors.full_messages},status: 422
        end

    end


    def destroy
        @post = Post.find(params[:id])
        @post.destroy
        head :no_content
    end

    private 

    def post_params
        params.require(:post).permit(:body,:user_id,:photo)
    end
end
