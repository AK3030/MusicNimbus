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



# reason_image = open('http://www.thissongslaps.com/wp-content/uploads/2013/05/skrillex-leaving-ep.jpg')
# reason_audio = open('https://s3-us-west-1.amazonaws.com/musicnimbus/01+The+Reason.mp3')
# Track.create(track_name: 'The Reason', image: reason_image, user: skrillex, audio: reason_audio)

try_audio = open('https://s3-us-west-1.amazonaws.com/musicnimbus/04+Try+It+Out+(Neon+Mix)+with+Alvin+Risk.mp3')
try_image = open('https://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/mpgoiknkd9jloqbsp0uk.jpg')
Track.create(track_name: 'Try It Out (Neon Mix) with Alvin Risk', image: try_image, user: skrillex, audio: try_audio)

ktn_image = open('https://i1.sndcdn.com/avatars-000341853478-ft62x1-t500x500.jpg')
ktn_header_image = open('https://i1.sndcdn.com/visuals-000000265325-HLuSRT-t1240x260.jpg')
ktn = User.create(username: "Kill The Noise", name:"kill the noise", location: "Los Angeles, California",
  password:"password123", image: ktn_image, header_image: ktn_header_image)

ghost_image = open('https://i1.sndcdn.com/artworks-000054830621-9qfi6j-t500x500.jpg')
ghost_audio = open('https://s3-us-west-1.amazonaws.com/musicnimbus/02+Ghosts+In+The+Machine+(Kill+The+Noise+Remix).mp3')
Track.create(track_name: 'The M Machine - Ghost in the Machine (Kill the Noise Remix)', image: ghost_image, user: ktn, audio: ghost_audio)

part_image = open('https://i1.sndcdn.com/artworks-4zd3zAyTsLw4-0-t500x500.jpg')
part_audio = open('https://s3-us-west-1.amazonaws.com/musicnimbus/01+Kill+The+Noise+(Part+I)+(Original+Mix).mp3')
Track.create(track_name: 'Kill the Noise (Part I)', image: part_image, user: ktn, audio: part_audio)

diplo_image = open('https://i1.sndcdn.com/artworks-000022725466-rf9gx0-t500x500.jpg')
diplo_audio = open('https://s3-us-west-1.amazonaws.com/musicnimbus/Diplodocus+(Kill+The+Noise+Remix).mp3')
Track.create(track_name: 'Noisia - Diplodocus (Kill the Noise Remix)', image: diplo_image, user: ktn, audio: diplo_audio)

future_image = open('https://i1.sndcdn.com/avatars-000296304150-0fh7eq-t500x500.jpg')
future_header_image = open('https://i1.sndcdn.com/visuals-000007436630-OlyMYZ-t1240x260.jpg')
future = User.create(username: "Future", name:"Future HNDRXX", location: "Atlanta, United States",
  password: "password123", image: future_image, header_image: future_header_image)




hardly_image = open('http://ocdn.hiphopdx.com/FutureMonster640.jpg')
hardly_audio = open('https://s3-us-west-1.amazonaws.com/musicnimbus/12+Hardly+%5BProd.+By+Southside%5D.mp3')
Track.create(track_name: 'Hardly', image: hardly_image, user: future, audio: hardly_audio)



diam_image = open('https://i1.sndcdn.com/artworks-vuy08zbeMQZo-0-t500x500.jpg')
diam_audio = open('https://s3-us-west-1.amazonaws.com/musicnimbus/04+Diamonds+Dancing.mp3')
Track.create(track_name: 'Future & Drake - Diamonds Dancing', image: diam_image, user: future, audio: diam_audio)

# purple_image = open('https://3fybkfrr10x3tgp41p45lr3a-wpengine.netdna-ssl.com/wp-content/uploads/2016/01/future-purple-reign-cover-art.jpg')
# purple_audio = open('https://s3-us-west-1.amazonaws.com/musicnimbus/13+Purple+Reign+%5BProd+By+Metro+Boomin%5D.mp3')
# Track.create(track_name: 'Purple Reign', image: purple_image, user: future, audio: purple_audio)

flume_image = open('https://i1.sndcdn.com/avatars-000199857182-bmbgeg-t500x500.jpg')
flume_header_image = open('https://va.sndcdn.com/bg/soundcloud:users:2976616/SoundcloudPropartnerProfile1240x260.jpg')
flume = User.create(username: "Flume", name:"Flume", location: "Sydney, Australia",
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
