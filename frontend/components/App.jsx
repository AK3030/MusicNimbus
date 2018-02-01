import React from 'react';
import {Route} from 'react-router-dom';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
import {AuthRoute} from '../util/route_util.jsx';

const App = () => (
  <div>
    <header>
      <h1>Nimbus</h1>
      <GreetingContainer/>
    </header>
    <AuthRoute exact path="/signup" component={SessionFormContainer}/>
    <AuthRoute exact path="/login" component={SessionFormContainer}/>

  </div>
);

export default App;
