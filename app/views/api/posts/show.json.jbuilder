json.post do 
    json.extract! @post, :id,:body,:user_id
end