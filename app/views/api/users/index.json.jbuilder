@users.each do |user|
    json.set! user.id do
        json.extract! user, :id,:first_name,:last_name
        json.avatar user.avatar.attached? ? user.avatar.url : nil
        json.cover user.cover.attached? ? user.cover.url : nil
        json.numFriends (user.friends.length + user.userfriends.length)
    end
end