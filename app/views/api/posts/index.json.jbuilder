@posts.each do |post|
    json.set! post.id do
        json.extract! post, :body, :id, :user_id
        json.numComments post.get_comment_nums
        json.photoUrl post.photo.attached? ? post.photo.url : nil
    end

end