json.like do
    json.extract! @like,:id,:user_id,:likeable_id,:likeable_type
end

post = @like.likeable


json.post do  
    json.extract! post, :body, :id, :user_id,:photo
    json.numComments post.get_comment_nums
    json.numLikes post.get_post_likes
    json.photoUrl post.photo.attached? ? post.photo.url : nil
    json.name post.get_name
    json.time post.created_at.in_time_zone('Pacific Time (US & Canada)').strftime("%B %d %Y %I:%M %p")
end

