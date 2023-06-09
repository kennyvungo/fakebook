@comments.each do |comment|
    json.set! comment.id do 
        json.extract! comment, :body,:id, :user_id,:post_id
        json.name comment.get_name
        json.numLikes comment.get_comment_likes
        json.avatarUrl comment.user.avatar.url
    end
end