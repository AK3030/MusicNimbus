import React from 'react';
import {Route} from 'react-router-dom';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
import {AuthRoute} from '../util/route_util.jsx';
import NavBar from './navbar';

const App = () => (
  <div className="main">
    <Route exact path="/" component={GreetingContainer}/>
    <Route exact path="/signup" component={GreetingContainer}/>
    <Route exact path="/login" component={GreetingContainer}/>
    <AuthRoute exact path="/signup" component={SessionFormContainer}/>
    <AuthRoute exact path="/login" component={SessionFormContainer}/>
    <Route exact path="/navbar" component={NavBar}/>
  </div>
);

export default App;
