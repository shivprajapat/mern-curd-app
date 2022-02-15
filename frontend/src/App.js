import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Details from './components/Details';
import Edit from './components/Edit';

import Header from './components/Header';
import Home from './components/Home';
import Register from './components/Register';
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/register' component={Register} />
          <Route path='/edit/:id' component={Edit} />
          <Route path='/view/:id' component={Details} />
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default App