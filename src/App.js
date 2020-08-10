import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header';
import HomePage from './pages/homepage';
import ShopPage from './pages/shop/shop';
import SignPage from './pages/sign/sign';
import CheckoutPage from './pages/checkout/checkout';

import { selectCurrentUser } from './redux/user/user-selectors';
import { createStructuredSelector } from 'reselect';

import { checkUserSession } from './redux/user/user-actions';

class App extends React.Component {
  componentDidMount(){
    const { checkSession } = this.props;
    checkSession();
  }

  render(){
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/collections" component={ShopPage} />
          <Route exact path="/signin" render={()=> this.props.currentUser ? (<Redirect to='/'/>) : (<SignPage/>)} />
          <Route exact path="/checkout" component={CheckoutPage}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkSession: ()=> dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);