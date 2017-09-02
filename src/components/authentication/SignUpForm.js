import React from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

const SignUpForm = () =>

  <div>
    <div className="row">
      <div className="six columns">
        <Input
          type="text"
          label="First Name"
          id="first_name"
          placeholder="first name"
        />
      </div>
      <div className="six columns">
        <Input
          type="text"
          label="Last Name"
          id="last_name"
          placeholder="last name"
        />
      </div>
    </div>
    <div className="row">
      <div className="six columns">
        <Input
          type="text"
          label="User Name"
          id="user_name"
          placeholder="user name"
        />
      </div>
      <div className="six columns">
        <Input
          type="email"
          label="Email Address"
          id="email"
          placeholder="email address"
        />
      </div>
    </div>
    <div className="row">
      <div className="six columns">
        <Input
          type="password"
          label="Password"
          id="password"
          placeholder="password"
        />
      </div>
      <div className="six columns">
        <Input
          type="password"
          label="Confirm Password"
          id="confirm_password"
          placeholder="confirm password"
        />
      </div>
    </div>
    <Button
      type="submit"
      value="Sign Up"/>
  </div>;

export default SignUpForm;
