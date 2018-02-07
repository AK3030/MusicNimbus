import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
import {AuthRoute} from '../util/route_util.jsx';
import NavBar from './navbar';

import NavbarContainer from './navbar_container';
import UserShowContainer from './user_show_container';
import EditUserFormContainer from './edit_user_form_container';
import UserTrackIndexContainer from './user_track_index_container';

const App = () => (
  <div className="main">
    <Route exact path="/signup" component={GreetingContainer}/>
    <Route exact path="/login" component={GreetingContainer}/>
    <Route path="/users/:userId" component={NavbarContainer}/>
    <Route exact path="/users/:userId/edit" component={UserShowContainer}/>



    <Switch>
      <Route exact path="/" component={GreetingContainer}/>
      <AuthRoute exact path="/signup" component={SessionFormContainer}/>
      <AuthRoute exact path="/login" component={SessionFormContainer}/>
      <Route exact path="/users/:userId" component={UserShowContainer}/>
      <Route exact path="/users/:userId/edit" component={EditUserFormContainer}/>
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
