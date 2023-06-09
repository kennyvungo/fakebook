json.comment do 
    json.extract! @comment, :id, :body, :post_id, :user_id
    json.name @comment.get_name
    json.avatarUrl @comment.user.avatar.url
    json.numLikes @comment.get_comment_likes
end

post = @comment.post
json.post do 
    json.extract! post, :body, :id, :user_id,:photo
    json.numComments post.get_comment_nums
    json.numLikes post.get_post_likes
    json.avatarUrl @comment.user.avatar.url
    json.photoUrl post.photo.attached? ? post.photo.url : nil
    json.name post.get_name
    json.time post.created_at.in_time_zone('Pacific Time (US & Canada)').strftime("%B %d %Y %I:%M %p")
end