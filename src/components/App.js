import React from 'react';
// import PropTypes from 'prop-types';
import Routes from '../routes';
import Header from './common/Header';

const App = () =>
  <div>
    <Header />
    { Routes }
  </div>;

export default App;
