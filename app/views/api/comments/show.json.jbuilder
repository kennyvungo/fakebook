json.comment do 
    json.extract! @comment, :id, :body, :post_id, :user_id
    # json.author @comment.get_user[first_name]
end

post = @comment.post
json.post do 
    json.extract! post, :body, :id, :user_id
    json.numComments post.get_comment_nums
end