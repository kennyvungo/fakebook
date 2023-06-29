# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require "open-uri"

    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
    Comment.destroy_all
    Like.destroy_all
    Pendingfriend.destroy_all
    Friend.destroy_all
    Post.destroy_all
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('posts')
    ApplicationRecord.connection.reset_pk_sequence!('comments')
    ApplicationRecord.connection.reset_pk_sequence!('likes')
    ApplicationRecord.connection.reset_pk_sequence!('pendingfriends')
    ApplicationRecord.connection.reset_pk_sequence!('friends')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    #1
    u1 = User.create!(
      email: 'demo@gmail.com', 
      password: 'password',
      first_name: 'Kenny',
      last_name: "Ngo"
    )
    u1.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/megan.JPG"),filename:"girl")
    u1.cover.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/poster.jpeg"), filename: "poster")
    u1.save

    #2
    u2 = User.create!(
      email: 'megan@gmail.com',
      password: 'password',
      first_name: 'Megan',
      last_name: 'Li'
    )
    u2.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/vegas.jpg"),filename:"vegas")
    u2.cover.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/megancover.JPG"), filename: "poster")
    u2.save

    #3
    u3 = User.create!(
      email: 'andrew@gmail.com',
      password: 'password',
      first_name: 'Andrew',
      last_name: 'Minh'
    )
    u3.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/andrew.jpg"),filename:"andrew")
    u3.cover.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/andrewcover.jpeg"),filename:"andrewcover")
    u3.save
    #4
    u4 = User.create!(
      email: 'diana@gmail.com',
      password: 'password',
      first_name: 'Diana',
      last_name: 'Hoang'
    )
    u4.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/diana.jpg"),filename:"diana")
    u4.cover.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/dianacover.jpeg"), filename: "dianacover")
    u4.save

    #5
    u5 = User.create!(
      email: 'jimmy@gmail.com',
      password: 'password',
      first_name: 'Janelle',
      last_name: 'Ph'
    )
    u5.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/jimmy.jpeg"),filename:"jimmy")
    u5.save
    #6
    u6 = User.create!(
      email: 'kimberly@gmail.com',
      password: 'password',
      first_name: 'Kimberly',
      last_name: 'Trinh'
    )
    #7
    u7= User.create!(
      email: 'arjun@gmail.com',
      password: 'password',
      first_name: 'Arjun',
      last_name: 'Patel'
    )
    u7.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/arjun.jpeg"),filename:"arjun")
    u7.cover.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/arjuncover.jpeg"), filename: "arjuncover")
    
    #8
    u8 = User.create!(
      email: 'peter@gmail.com',
      password: 'password',
      first_name: 'Peter',
      last_name: 'Pham'
    )
    u8.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/arjun.jpeg"),filename:"peter")

    #9
    u9 = User.create!(
      email: 'joshua@gmail.com',
      password: 'password',
      first_name: 'Joshua',
      last_name: 'Li'
    )
    u9.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/joshua.jpeg"),filename:"joshua")
    u9.cover.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/joshuacover.jpeg"), filename: "joshcover")
    u9.save
    #10
    u10 = User.create!(
      email: 'katherine@gmail.com',
      password: 'password',
      first_name: 'Katherine',
      last_name: 'Vu'
    )
    u10.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/katherine.jpg"),filename:"katherine")
    u10.cover.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/katherinecover.jpeg"), filename: "kathcover")
    u10.save
    #11
    u11 = User.create!(
      email: 'danny@gmail.com',
      password: 'password',
      first_name: 'Danny',
      last_name: 'Nguyen'
    )
    u11.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/danny.jpeg"),filename:"danny")
    
    u11.save
    #12
    u12 = User.create!(
      email: 'truong@gmail.com',
      password: 'password',
      first_name: 'Truong',
      last_name: 'Tran'
    )
    u12.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/truong.jpeg"),filename:"truong")
    u12.cover.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/truongcover.jpeg"), filename: "truongcover")
    u12.save

    #13
    u13 = User.create!(
      email: 'teague@gmail.com',
      password: 'password',
      first_name: 'Teague',
      last_name: 'Le'
    )
    u13.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/teague.jpeg"),filename:"teague")
    u13.cover.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/teaguecover.jpeg"), filename: "teaguecover")
    u13.save
    
    #14
    u14 = User.create!(
      email: 'jesse@gmail.com',
      password: 'password',
      first_name: 'Jesse',
      last_name: 'Pham'
    )
    u14.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/jesse.jpeg"),filename:"jesse")
    u14.cover.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/jessecover.jpeg"), filename: "jessecover")
    u14.save
    
    #15
    u15 = User.create!(
      email: 'john@gmail.com',
      password: 'password',
      first_name: 'John',
      last_name: 'Santos'
    )
    u15.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/john.jpeg"),filename:"john")
    u15.cover.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/johncover.jpeg"), filename: "johncover")
    u15.save

    #16
    u16 = User.create!(
      email: 'brandone@gmail.com',
      password: 'password',
      first_name: 'Brandon',
      last_name: 'Luo'
    )

    u16.cover.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/brandoncover.jpeg"), filename: "brandoncover")
    u16.save

    #17
    u17 = User.create!(
      email: 'matty@gmail.com',
      password: 'password',
      first_name: 'Matthew',
      last_name: 'Wong'
    )
    u17.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/matt.jpeg"),filename:"matt")
    u17.cover.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/mattcover.jpeg"), filename: "mattcover")
    u17.save


    puts "Creating posts..."

    p1 = Post.create(
      body: "this is just a text post",
      user_id: 1
    )
    #6
    p2 = Post.create(
      body: 'me and my poster',
      user_id: 1
    )
  
    p2.photo.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/poster.jpeg"), filename: "poster")
    p2.save


    p3 = Post.create(
      body: 'me and friends',
      user_id: 1
    )
    p3.photo.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/friends.jpg"),filename: "friend")
    p3.save

    p4 = Post.create(
      body: 'me and megan',
      user_id: 1
    )

    p4.photo.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/megan.JPG"),filename:"girl")
    p4.save
    p5 = Post.create(
      body: 'me and family',
      user_id: 1
    )

    p5.photo.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/family.jpg"),filename:"family")
    p5.save

    p6 = Post.create(
      body: 'me in arizona',
      user_id: 1
    )
    p6.photo.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/me.JPG"),filename:"me")
    p6.save

    puts "Creating Friendships"
    Friend.create(user_id: 1, friend_id: 2)
    Friend.create(user_id: 1, friend_id: 3)
    Friend.create(user_id: 1, friend_id: 4)
    Friend.create(user_id: 1, friend_id: 5)
    Friend.create(user_id: 1, friend_id: 6)
    Friend.create(user_id: 1, friend_id: 7)
    Friend.create(user_id: 1, friend_id: 8)
    Friend.create(user_id: 1, friend_id: 9)
    Friend.create(user_id: 1, friend_id: 10)
    Friend.create(user_id: 1, friend_id: 11)
    Friend.create(user_id: 1, friend_id: 12)
    Friend.create(user_id: 1, friend_id: 13)
    Friend.create(user_id: 1, friend_id: 14)
  
    puts "Done!"
