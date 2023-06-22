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
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      email: 'demo@gmail.com', 
      password: 'password',
      first_name: 'Kenny',
      last_name: "Ngo"
    )
    p1 = Post.create(
      body: 'test',
      user_id: 1
    )
  
  
    p1.photo.attach(io: URI.open("https://knfakebook-dev.s3.us-west-1.amazonaws.com/0scdnsj8byltmzzxzpwvwdl91osz"), filename: "photo")
    # More users
    10.times do 
      User.create!({
        email: Faker::Internet.unique.email,
        password: 'password',
        first_name: Faker::Name.first_name,
        last_name:  Faker::Name.last_name
      }) 
    end
  
    puts "Done!"
