# Nimbus
[Nimbus](https://musicnimbus.herokuapp.com/) is a clone of Soundcloud(link), a website that allows you to play music and maintain a profile with your own personal tracks. Nimbus uses Ruby on Rails  and Postgres on the back end and React with Redux on the front end.

<p align="center">
  <a href="https://musicnimbus.herokuapp.com/#/"><img width=70% src="https://i.imgur.com/5IppneV.png" /></a>
</p>

<p align="center">Logo and background image are from [OWSLA](http://owsla.com/) record label</p>

## Key Features
* [User Profiles](#users)
* [File Uploads](#file-uploads)
* [Song Playback](#song-playback)

### Users
Users can sign up for an account and update their information. Nimbus includes front end and back end user authentication. Profiles allow users to edit their profiles with autofilling forms and intuitive drag and drop profile/header picture uploads. The track index on the home page allows users to navigate to navigate different artist pages.

<p align="center">
  <a href="https://musicnimbus.herokuapp.com/#/"><img width=70% src="https://i.imgur.com/sFgak7O.png" /></a>
</p>

### File Uploads
Uploaded files including profile header images, profile images, album covers and song audio are stored on Amazon S3. When users submit a form or drag and drop a file, an ajax request is sent to the rails server (hosted on Heroku). The Paperclip library then routes the file to an Amazon S3 bucket. Rails then returns json including links to the newly uploaded file(s) which are inserted into jsx.

<p align="center">
  <a href="https://musicnimbus.herokuapp.com/#/"><img width=70% src="https://media.giphy.com/media/3o7WIKr56AqILAFqTK/giphy.gif" /></a>
</p>

### Track Playback
After adding songs to their profile users can play their newly uploaded audio as well as tracks on other artist’s pages. Rather than using built in html5 audio controls Nimbus makes use of React Player. React Player allows creation of customizable media controls. 

<p align="center">
  <a href="https://musicnimbus.herokuapp.com/#/"><img width=70% src="https://media.giphy.com/media/xUOwFZ4bRA2oFI0aC4/giphy.gif" /></a>
</p>

### Technologies
* [React Player](https://github.com/CookPete/react-player)
* [React dropzone](https://github.com/react-dropzone/react-dropzone)
* [Paperclip](https://github.com/thoughtbot/paperclip)

### Future Directions
* waveforms
* search
* playbar
* improved stream/index pages

