require 'open-uri'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
skrillex_image = open('https://i1.sndcdn.com/avatars-000337298392-3leyki-t500x500.jpg')
skrillex_header_image = open('https://i1.sndcdn.com/visuals-000000856062-15Ew90-t2480x520.jpg')
User.create(username: "Skrillex", password:"password123", image: skrillex_image, header_image: skrillex_header_image)

ktn_image = open('https://i1.sndcdn.com/avatars-000341853478-ft62x1-t500x500.jpg')
ktn_header_image = open('https://i1.sndcdn.com/visuals-000000265325-HLuSRT-t1240x260.jpg')
User.create(username: "Kill The Noise", password:"password123", image: ktn_image, header_image: ktn_header_image)

future_image = open('https://i1.sndcdn.com/avatars-000296304150-0fh7eq-t500x500.jpg')
future_header_image = open('https://i1.sndcdn.com/visuals-000007436630-OlyMYZ-t1240x260.jpg')
User.create(username: "Future", password: "password123", image: future_image, header_image: future_header_image)
