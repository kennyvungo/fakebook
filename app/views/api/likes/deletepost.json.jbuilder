json.post do 
    json.extract! @post, :id,:body,:user_id,:created_at
    json.numLikes @post.get_post_likes
    json.photoUrl @post.photo.attached? ? @post.photo.url : nil
    json.time @post.created_at.strftime("%B %d %Y %I:%M %p")
end