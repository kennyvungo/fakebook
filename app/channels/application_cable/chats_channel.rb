class RoomsChannel < ApplicationCable::Channel
    def subscribed
      @chat = Chat.find_by(id: params[:id])
      stream_for @chat
    end
  end