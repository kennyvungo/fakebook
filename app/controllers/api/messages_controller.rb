class Api::MessagesController < ApplicationController
    def index 
        @messages = Message.all
    end

    def create 
        @message = Message.new(message_params)
        if @message.save 
            ChatsChannel.broadcast_to(@message.chat,@message)
        else
            render json: {errors:@message.errors.full_messages},status: 422
        end
    end

    def message_params
        params.require[:message].permit(:body,:author_id,:chats_id)
    end
end
