import React from 'react';
import { BrowserRouter,Switch, Route, } from 'react-router-dom';
import Home from '../Containers/Home';
import LogIn from '../Containers/LogIn';
import Register from '../Containers/Register';
import NotFound from '../Containers/NotFound';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact parh='/login' componet={LogIn} />
      <Route exact parh='/register' componet={Register} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
