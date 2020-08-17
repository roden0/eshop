import React, { useState, useEffect, lazy, Suspense } from 'react';

import { GlobalStyle } from './globalStyles';

import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import Spinner from './components/spinner/spinner';
import ErrorBoundary from './components/error-boundary/error-boundary';

const HomePage = lazy(()=>import('./pages/homepage'));
const ShopPage = lazy(()=>import('./pages/shop/shop'));
const SignPage = lazy(()=>import('./pages/sign/sign'));
const CheckoutPage = lazy(()=>import('./pages/checkout/checkout'));

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
      <GlobalStyle/>
      <Header currentUser={currentUser} />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/collections" component={ShopPage} />
            <Route exact path="/signin" render={()=> currentUser ? (<Redirect to='/'/>) : (<SignPage/>)} />
            <Route exact path="/checkout" component={CheckoutPage}/>
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
    )
  
}

export default App;