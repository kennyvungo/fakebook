json.post do 
    json.extract! @post, :id,:body,:user_id
    json.photoUrl @post.photo.attached? ? @post.photo.url : nil
end