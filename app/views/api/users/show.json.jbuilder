json.user do
    json.extract! @user, :id, :email, :first_name,:last_name, :created_at, :updated_at
    json.avatar @user.avatar.attached? ? @user.avatar.url : nil
    json.cover @user.cover.attached? ? @user.cover.url : nil
    json.numFriends (@user.friends.length + @user.userfriends.length)
end