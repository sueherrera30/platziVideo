import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../Containers/Home';
import LogIn from '../Containers/LogIn';

const App = () => (
  <BrowserRouter>
    <Route exact path='/' component={Home} />
    <Route exact parh='/login' componet={LogIn} />
  </BrowserRouter>
);
export default App;
