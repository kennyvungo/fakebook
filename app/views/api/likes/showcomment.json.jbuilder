json.like do
    json.extract! @like,:id,:user_id,:likeable_id,:likeable_type
end

comment = @like.likeable

json.comment do 
    json.extract! comment, :id
    json.numLikes comment.get_comment_likes
    json.updateLikes true
end
