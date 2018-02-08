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
skrillex = User.create(username: "Skrillex", name: "Sonny Moore", location: "Los Angeles, California",
  password:"password123", image: skrillex_image, header_image: skrillex_header_image)

ktn_image = open('https://i1.sndcdn.com/avatars-000341853478-ft62x1-t500x500.jpg')
ktn_header_image = open('https://i1.sndcdn.com/visuals-000000265325-HLuSRT-t1240x260.jpg')
ktn = User.create(username: "Kill The Noise", name:"kill the noise", location: "Los Angeles, California",
  password:"password123", image: ktn_image, header_image: ktn_header_image)

future_image = open('https://i1.sndcdn.com/avatars-000296304150-0fh7eq-t500x500.jpg')
future_header_image = open('https://i1.sndcdn.com/visuals-000007436630-OlyMYZ-t1240x260.jpg')
future = User.create(username: "Future", name:"Future HNDRXX", location: "Atlanta, United States",
  password: "password123", image: future_image, header_image: future_header_image)

flume_image = open('https://i1.sndcdn.com/avatars-000199857182-bmbgeg-t500x500.jpg')
flume_header_image = open('https://va.sndcdn.com/bg/soundcloud:users:2976616/SoundcloudPropartnerProfile1240x260.jpg')
flume = User.create(username: "Flume", name:"Future HNDRXX", location: "Sydney, Australia",
  password: "password123", image: flume_image, header_image: flume_header_image)

tennis_court_pic = open('https://i1.sndcdn.com/artworks-000077403039-k956ck-t200x200.jpg')
tennis_court_audio = open("https://s3-us-west-1.amazonaws.com/musicnimbus/Tennis+Court+(Flume+Remix).mp3")
Track.create(track_name: 'Lorde - Tennis Court (Flume Remix)', image: tennis_court_pic, user: flume, audio: tennis_court_audio)

sintra_pic = open('https://i1.sndcdn.com/artworks-000041237346-kwv1b7-t200x200.jpg')
sintra_audio = open('https://s3-us-west-1.amazonaws.com/musicnimbus/Sintra.mp3')
Track.create(track_name: 'Sintra', image: sintra_pic, user: flume, audio: sintra_audio)

younme_pic = open('https://i1.sndcdn.com/artworks-000050305011-e8ynd4-t200x200.jpg')
younme_audio = open('https://s3-us-west-1.amazonaws.com/musicnimbus/You+%26+Me+(feat.+Eliza+Doolittle)+(Flume+Remix).mp3')
Track.create(track_name: 'Disclosure - You & Me (Flume Remix)', image: younme_pic, user: flume, audio: younme_audio)
