import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header';
import HomePage from './pages/homepage';
import ShopPage from './pages/shop/shop';

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;