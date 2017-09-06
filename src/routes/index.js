import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../components/landing/HomePage';
import SignupPage from '../components/authentication/SignupPage';
import LoginPage from '../components/authentication/LoginPage';
import requireAuth from '../utils/requireAuth';

export default (
  <Switch>
    <Route exact path="/" component={requireAuth(HomePage)} />
    <Route path="/signup" component={SignupPage} />
    <Route path="/login" component={LoginPage} />
  </Switch>
);
