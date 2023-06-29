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
    ApplicationRecord.connection.reset_pk_sequence!('users','posts','comments','likes','pendingfriends','friends')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      email: 'demo@gmail.com', 
      password: 'password',
      first_name: 'Kenny',
      last_name: "Ngo"
    )

    puts "Creating posts..."

    p1 = Post.create(
      body: "this is just a text post",
      user_id: 1
    )

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
  
    puts "Done!"
