import React from 'react';
import SignUpForm from './SignUpForm';

export default class SignUpPage extends React.Component {
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
            <SignUpForm />
          </div>
        </div>
      </div>
    );
  }
}
