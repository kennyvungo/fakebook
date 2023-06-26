json.like do
    json.extract! @like,:id,:user_id,:likeable_id,:likeable_type
end

post = @like.likeable


json.post do  
    json.extract! post, :id
    json.numLikes post.get_post_likes
    json.updateLikes true
end

