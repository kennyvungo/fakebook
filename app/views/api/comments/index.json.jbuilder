@comments.each do |comment|
    json.set! comment.id do 
        json.extract! comment, :body,:id, :user_id
    end
end