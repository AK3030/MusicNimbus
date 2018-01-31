import React from 'react';
import {Route} from 'react-router-dom';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';

const App = () => (
  <div>
    <header>
      <h1>Nimbus</h1>
      <GreetingContainer/>
    </header>
    <Route path="/signup" component={SessionFormContainer}/>
    <Route path="/login" component={SessionFormContainer}/>

  </div>
);

export default App;
