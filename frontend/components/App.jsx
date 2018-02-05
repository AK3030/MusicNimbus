import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
import {AuthRoute} from '../util/route_util.jsx';
import NavBar from './navbar';
import Basic from './dropzone_test';
import NavbarContainer from './navbar_container';
import UserShowContainer from './user_show_container';

const App = () => (
  <div className="main">
    <Route exact path="/signup" component={GreetingContainer}/>
    <Route exact path="/login" component={GreetingContainer}/>
    <Route exact path="/users/:userId" component={NavbarContainer}/>

  
    <Switch>
      <Route exact path="/" component={GreetingContainer}/>
      <AuthRoute exact path="/signup" component={SessionFormContainer}/>
      <AuthRoute exact path="/login" component={SessionFormContainer}/>

      <Route exact path="/dropzone" component={Basic}/>
      <Route exact path="/users/:userId" component={UserShowContainer}/>
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
