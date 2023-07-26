# README



* Background 

Fakebook is a fullstack clone of the social media website Fakebook. The goal of this project was to be as realistic and as close as possible to the functionality of the real Facebook.

In this current implementation of Fakebook, a user is able to create an account, login, and CRUD functionality for post, comments, friends, and likes. Users are also able to upload photos for account profile pictures, cover photos, and posts photos. All of these changes will persist across any account that is logged in. The current data in the site was created using a seed file.

* Libraries and Methods 

The backend of this project was set up using Ruby on Rails, while the frontend was accomplished using React, React Redux, and ReactRouter version 5; project dependencies were handled with npm. The live version of this project is hosted through Render and store images on AWS S3.

# Features

# Log In Page
<img width="1533" alt="Screenshot 2023-07-18 at 9 56 43 PM" src="https://github.com/kennyvungo/fakebook/assets/28582863/5edc69ab-b6d6-4fa4-b458-0b37800a590b">

# Profile Page

Every user gets their own profile page which they can customize by uploading their own profile photo and cover photo

https://github.com/kennyvungo/fakebook/assets/28582863/1e90f63b-dca7-4195-b6b3-7068df418f58
# Profile Photo Code
  - to allow for uploading photos formData is used along with Amazon S3 for hosting
  - upon submitting, a new formData is created with the photo file appended
  - this formData is then dispatched to a thunk action creator with the data, which will then be passed to the backend
``` javascript
    const handleClick = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('user[avatar]', photoFile);
    dispatch(userActions.createProf(userId,formData)).then(() =>{
      dispatch(userActions.fetchUser(userId))
    })
  }
```


# Main NewsFeed Page

https://github.com/kennyvungo/fakebook/assets/28582863/8a05c45c-8e57-463f-a694-fe59b6708757



# Posting 

https://github.com/kennyvungo/fakebook/assets/28582863/1751f20f-8e86-4306-b4d1-b18b39806689

# Comments Jbuilder Code
  - since the number of comments has to be updated on the post itself, the jbuilder response for a comment has to contain information about the post as well
  - we are able to access information about the post through the association as well as custom methods
``` ruby
json.comment do 
    json.extract! @comment, :id, :body, :post_id, :user_id
    json.name @comment.get_name
    json.avatarUrl @comment.user.avatar.url
    json.numLikes @comment.get_comment_likes
    json.updateLikes false
end

post = @comment.post
json.post do 
    json.extract! post, :body, :id, :user_id,:photo
    json.numComments post.get_comment_nums
    json.numLikes post.get_post_likes
    json.avatarUrl post.user.avatar.url
    json.photoUrl post.photo.attached? ? post.photo.url : nil
    json.updateLikes false
    json.name post.get_name
    json.time post.created_at.in_time_zone('Pacific Time (US & Canada)').strftime("%B %d %Y %I:%M %p")
end
```

Users have full CRUD functionality for posts, likes, comments, and friendships.


# Future Features
  Some possible future features may include real-time messaging and Facebook Marketplace.
