json.user do
    json.extract! @user, :id, :email, :first_name,:last_name, :created_at, :updated_at
    json.avatar @user.prof.attached? ? @user.prof.url : nil
    json.cover @user.cover.attached? ? @user.cover.url : nil
end