json.comment do 
    json.extract! @comment, :body, :post_id, :user_id
    json.author @comment.get_user
end

post = @comment.post
json.post do 
    json.extract! post, :body, :id, :user_id
    json.numComments post.get_comment_nums
end