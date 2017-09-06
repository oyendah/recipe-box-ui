import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Routes from '../routes';
import Header from './common/Header';
import FlashMessagesList from '../components/flash/FlashMessageList';
import { logout } from '../actions';

class App extends React.Component {
  render() {
    const { isAuthenticated, errorMessage } = this.props;
    return (
      <div>
        <Header
          isAuthenticated={isAuthenticated}
          errorMessage={errorMessage}
          logout={this.props.logout}/>
        <FlashMessagesList />
        {Routes}
      </div>
    );
  }
}

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  logout: PropTypes.func,
};


function mapStateToProps(state) {
  const { auth } = state;
  const { isAuthenticated, errorMessage } = auth;

  return {
    isAuthenticated,
    errorMessage
  };
}

export default connect(mapStateToProps, { logout })(App);
