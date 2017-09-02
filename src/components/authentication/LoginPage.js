import React from 'react';
import LoginForm from './LoginForm';

export default class LoginPage extends React.Component {
  /**
   * React Render
   * @return {object} html
   */
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="eleven column">
            <h4 className="hero-heading">Sign Up</h4>
            <LoginForm />
          </div>
        </div>
      </div>
    );
  }
}
