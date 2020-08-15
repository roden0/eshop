import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header';
import HomePage from './pages/homepage';
import ShopPage from './pages/shop/shop';
import SignPage from './pages/sign/sign';
import CheckoutPage from './pages/checkout/checkout';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

const App = ()=> {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
    return () => unSubscribeFromAuth();
  });
    return(
      <div className="app">
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/collections" component={ShopPage} />
        <Route exact path="/signin" render={()=> currentUser ? (<Redirect to='/'/>) : (<SignPage/>)} />
        <Route exact path="/checkout" component={CheckoutPage}/>
      </Switch>
    </div>
    )
  
}

export default App;