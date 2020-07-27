import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header';
import HomePage from './pages/homepage';
import ShopPage from './pages/shop/shop';
import SignPage from './pages/sign/sign';

import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(currentUser =>{
      this.setState({currentUser})
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    console.log(process.env);
    return (
      <div className="app">
        {process.env.NODE_ENV}
        {process.env.REACT_APP_FIREBASE_API_KEY}
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignPage} />
        </Switch>
      </div>
    );
  }
}

export default App;