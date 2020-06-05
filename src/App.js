import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// pages
import Home from './Pages/Home/Index'
import Error from './Pages/Error/index'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact >
          <Home />
        </Route>
        <Route >
          <Error/>
        </Route>
      </Switch>
    </BrowserRouter >
  );
}

export default App;
