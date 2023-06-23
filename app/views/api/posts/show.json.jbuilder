json.post do 
    json.extract! @post, :id,:body,:user_id
    json.name @post.get_name
    json.photoUrl @post.photo.attached? ? @post.photo.url : nil

end