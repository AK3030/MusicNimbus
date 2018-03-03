import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
import {AuthRoute, StreamRoute} from '../util/route_util.jsx';
import NavBar from './navbar';

import NavbarContainer from './navbar_container';
import UserShowContainer from './user_show_container';
import EditUserFormContainer from './edit_user_form_container';
import UserTrackIndexContainer from './user_track_index_container';
import UploadSongFormContainer from './upload_song_form_container';
// import EditTrackForm from './edit_track_form';
import EditTrackFormContainer from './edit_track_form_container';
import Stream from './stream';


const App = () => (
  <div className="main">
    <Route exact path="/signup" component={GreetingContainer}/>
    <Route exact path="/login" component={GreetingContainer}/>
    <Route path="/users/:userId" component={NavbarContainer}/>
    <Route exact path="/users/:userId/edit" component={UserShowContainer}/>
    <Route exact path="/users/:userId/uploadSong" component={UserShowContainer}/>
    <Route exact path="/stream" component={NavbarContainer}/>



    <Switch>
      <Route exact path="/stream" component={Stream}/>
      <Route exact path="/users/:userId/tracks/:trackId/edit" component={EditTrackFormContainer} />
      <Route exact path="/uploadsongtest" component={UploadSongFormContainer}/>
      <StreamRoute exact path="/" component={GreetingContainer}/>
      <AuthRoute exact path="/signup" component={SessionFormContainer}/>
      <AuthRoute exact path="/login" component={SessionFormContainer}/>
      <Route exact path="/users/:userId" component={UserShowContainer}/>
      <Route exact path="/users/:userId/edit" component={EditUserFormContainer}/>
      <Route exact path="/users/:userId/uploadSong" component={UploadSongFormContainer}/>

      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
