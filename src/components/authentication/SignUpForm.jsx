import React from 'react';
import PropTypes from 'prop-types';
import Input from '../common/Input';
import Button from '../common/Button';

const SignUpForm = ({ onSave, onChange }) =>

  <div>
    <div className="row">
      <div className="six columns">
        <Input
          type="text"
          label="First Name"
          id="first_name"
          placeholder="first name"
          name="first_name"
          onChange={onChange}
        />
      </div>
      <div className="six columns">
        <Input
          type="text"
          label="Last Name"
          id="last_name"
          placeholder="last name"
          name="last_name"
          onChange={onChange}
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
          name="user_name"
          onChange={onChange}
        />
      </div>
      <div className="six columns">
        <Input
          type="email"
          label="Email Address"
          id="email"
          placeholder="email address"
          name="email"
          onChange={onChange}
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
          name="password"
          onChange={onChange}
        />
      </div>
      <div className="six columns">
        <Input
          type="password"
          label="Confirm Password"
          id="confirm_password"
          placeholder="confirm password"
          name="password_confirmation"
          onChange={onChange}
        />
      </div>
    </div>
    <Button
      type="submit"
      value="Sign Up"
      onClick={onSave}
      classType="button-primary"/>
  </div>;

SignUpForm.propTypes = {
  onSave: PropTypes.func,
  onChange: PropTypes.func,
};

export default SignUpForm;
