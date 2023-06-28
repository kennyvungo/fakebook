@friends.each do |friend|
    json.set! friend.id do 
        json.extract! friend, :id, :friender_id,:friendee_id
        
    end
end