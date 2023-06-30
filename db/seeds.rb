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
    u8.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/peter.jpg"),filename:"peter")

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

    u18 = User.create!(
      email: 'karen@gmail.com',
      password: 'password',
      first_name: 'Karen',
      last_name: 'Li'
    )
    u18.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/karen.jpeg"),filename:"karen")
    u18.cover.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/karencover.jpeg"), filename: "karencover")
    u18.save

    u19 = User.create!(
      email: 'ed@gmail.com',
      password: 'password',
      first_name: 'Edwin',
      last_name: 'Choi'
    )
   
    u20= User.create!(
      email: 'ahmed@gmail.com',
      password: 'password',
      first_name: 'Ahmed',
      last_name: 'Razi'
    )

    u21 = User.create!(
      email: 'ant@gmail.com',
      password: 'password',
      first_name: 'Anthony',
      last_name: 'Wong'
    )
    u21.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/anthony.png"),filename:"ant")
    u21.save
  

    u22 = User.create!(
      email: 'ernest@gmail.com',
      password: 'password',
      first_name: 'Ernest',
      last_name: 'Tan'
    )
    u22.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/ernest.png"),filename:"ernest")
    u22.save


    u23 = User.create!(
      email: 'hanna@gmail.com',
      password: 'password',
      first_name: 'Hanna',
      last_name: 'Darwish'
    )
    u23.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/hanna.png"),filename:"hanna")
    u23.save


    u24 = User.create!(
      email: 'akea@gmail.com',
      password: 'password',
      first_name: 'Akea',
      last_name: 'Tolentino'
    )
    u24.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/akea.png"),filename:"akea")
    u24.save

    u25 = User.create!(
      email: 'jas@gmail.com',
      password: 'password',
      first_name: 'Jasvneet',
      last_name: 'Kaur'
    )
    u25.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/jas.png"),filename:"jas")
    u25.save

    u26 = User.create!(
      email: 'lauren@gmail.com',
      password: 'password',
      first_name: 'Lauren',
      last_name: 'Armstrong'
    )
    u26.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/lauren.png"),filename:"lauren")
    u26.save


    u27 = User.create!(
      email: 'matthew@gmail.com',
      password: 'password',
      first_name: 'Matthew',
      last_name: 'Montejo'
    )
    u27.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/matthew.jpeg"),filename:"matthew")
    u27.save


    u28 = User.create!(
      email: 'nick@gmail.com',
      password: 'password',
      first_name: 'Nick',
      last_name: 'Gentry'
    )
    u28.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/nickg.png"),filename:"nickg")
    u28.save

    u29= User.create!(
      email: 'nitty@gmail.com',
      password: 'password',
      first_name: 'Nitty',
      last_name: 'Hein'
    )
    u29.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/nitty.png"),filename:"nitty")
    u29.save

    u30= User.create!(
      email: 'rocco@gmail.com',
      password: 'password',
      first_name: 'Rocco',
      last_name: 'Lattanzio'
    )
    u30.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/rocco.png"),filename:"rocco")
    u30.save

    u31 = User.create!(
      email: 'rohan@gmail.com',
      password: 'password',
      first_name: 'Rohan',
      last_name: 'Mudumba'
    )
    u31.cover.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/rohancover.jpeg"),filename:"rohan")
    u31.save

    u32 = User.create!(
      email: 'misha@gmail.com',
      password: 'password',
      first_name: 'Misha',
      last_name: 'Bansal'
    )
    u32.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/misha.jpeg"),filename:"misha")
    u32.save 

    u33 = User.create!(
      email: 'shanna@gmail.com',
      password: 'password',
      first_name: 'Shanna',
      last_name: 'Le'
    )
    u33.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/shanna.png"),filename:"shanna")
    u33.save

    u34 = User.create!(
      email: 'thomas@gmail.com',
      password: 'password',
      first_name: 'Thomas',
      last_name: 'Ly'
    )
    u34.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/thomas.png"),filename:"thomas")
    u34.save
    
    u35 = User.create!(
      email: 'vincent@gmail.com',
      password: 'password',
      first_name: 'Vincent',
      last_name: 'Pham'
    )
    u35.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/vincent.png"),filename:"vincent")

    u36 = User.create!(
      email: 'chris@gmail.com',
      password: 'password',
      first_name: 'Chris',
      last_name: 'Cheasty'
    )
    u36.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/chris.jpeg"),filename:"chris")
    u36.save

    u37 = User.create!(
      email: 'paulo@gmail.com',
      password: 'password',
      first_name: 'Paulo',
      last_name: 'Bocanegra'
    )
    u37.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/paulo.jpeg"),filename:"paulo")
    u37.save

    u38 = User.create!(
      email: 'michael@gmail.com',
      password: 'password',
      first_name: 'Michael',
      last_name: 'Madsen'
    )
    u38.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/mike.jpeg"),filename:"mike")
    u38.save

    u39 = User.create!(
      email: 'abbey@gmail.com',
      password: 'password',
      first_name: 'Abbey',
      last_name: 'Hernandez'
    )
    u39.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/abby.jpeg"),filename:"abby")

    u40 = User.create!(
      email: 'alvin@gmail.com',
      password: 'password',
      first_name: 'Alvin',
      last_name: 'Zablan'
    )
    u40.avatar.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/alvin.jpeg"),filename:"alvin")
    u40.save


    puts "Creating posts..."

    p1 = Post.create(
      body: "this is just a text post",
      user_id: 1
    )
    p7 = Post.create(
      body: ""
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
      body: 'Hey Programmers!',
      user_id: 40
    )

    p7= Post.create(
      body: 'Trivia Night!',
      user_id: 25
    )
    p7.photo.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/trivia.png"),filename:"me")
    

    p8 = Post.create(
      body: 'topgolf with the gang',
      user_id: 27
    )
    p8.photo.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/topgolf.jpg"),filename:"me")
    

    p9 = Post.create(
      body: '[UNRESOLVED] I am getting a duplicate table error for my user_id index',
      user_id: 30
    )
    p9.photo.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/code.jpg"),filename:"me")

    p10 = Post.create(
      body: "Celebrating Chris's new job!",
      user_id: 37
    )
    p10.photo.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/bar.jpeg"),filename:"bar")


    p11 = Post.create(
      body: 'we are gathered here today to mourn the loss of our good friend akea',
      user_id: 29
    )
    p11.photo.attach(io: URI.open("https://newknfakebook-seeds.s3.us-west-1.amazonaws.com/akeapost.png"),filename:"akea")


    puts "Creating Comments"
      c1 = Comment.create(
        body: "Is your webpack running?",
        user_id: 38,
        post_id: 9
      )
      c2 = Comment.create(
        body: "thoughts and prayers",
        user_id: 1,
        post_id: 11
      )
      c3 = Comment.create(
        body: "thoughts and prayers",
        user_id: 34,
        post_id: 11
      )
      c4 = Comment.create(
        body: "thoughts and prayers",
        user_id: 33,
        post_id: 11
      )
    

    puts "Creating Friendships"
    # Friend.create(user_id: 1, friend_id: 2)
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
    Friend.create(user_id: 1, friend_id: 15)
    Friend.create(user_id: 1, friend_id: 16)
    Friend.create(user_id: 1, friend_id: 17)
    Friend.create(user_id: 1, friend_id: 18)
    Friend.create(user_id: 1, friend_id: 19)
    Friend.create(user_id: 1, friend_id: 20)
    Friend.create(user_id: 1, friend_id: 21)
    Friend.create(user_id: 1, friend_id: 22)
    Friend.create(user_id: 1, friend_id: 23)
    Friend.create(user_id: 1, friend_id: 24)
    Friend.create(user_id: 1, friend_id: 25)
    Friend.create(user_id: 1, friend_id: 26)
    Friend.create(user_id: 1, friend_id: 27)
    Friend.create(user_id: 1, friend_id: 28)
    Friend.create(user_id: 1, friend_id: 29)
    Friend.create(user_id: 1, friend_id: 30)
    Friend.create(user_id: 1, friend_id: 31)
    Friend.create(user_id: 1, friend_id: 32)
    Friend.create(user_id: 1, friend_id: 33)
    Friend.create(user_id: 1, friend_id: 34)
    Friend.create(user_id: 1, friend_id: 35)
    Friend.create(user_id: 1, friend_id: 36)
    Friend.create(user_id: 1, friend_id: 37)
    Friend.create(user_id: 1, friend_id: 38)
    Friend.create(user_id: 1, friend_id: 39)
    Friend.create(user_id: 1, friend_id: 40)

    puts "Creating PendingFriends"

    Pendingfriend.create(friender_id: 37, friendee_id: 1)
    Pendingfriend.create(friender_id: 38, friendee_id: 1)
    Pendingfriend.create(friender_id: 39, friendee_id: 1)
    Pendingfriend.create(friender_id: 40, friendee_id: 1)

  
    puts "Done!"
