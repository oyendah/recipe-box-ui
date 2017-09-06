import React from 'react';
import PropTypes from 'prop-types';
import Input from '../common/Input';
import Button from '../common/Button';

const LoginForm = ({ onSave, onChange }) =>

  <div>
    <div className="row">
      <div className="six columns">
        <Input
          type="email"
          name="email"
          label="Email Address"
          id="email"
          onChange={onChange}
          placeholder="email address"
          icon="fa fa-user"
        />
      </div>
    </div>
    <div className="row">
      <div className="six columns">
        <Input
          type="password"
          name="password"
          label="Password"
          id="password"
          onChange={onChange}
          placeholder="password"
          icon="fa fa-lock"
        />
      </div>
    </div>
    <Button
      type="submit"
      value="Login"
      onClick={onSave}
      classType="button-primary"/>
  </div>;


LoginForm.propTypes = {
  onSave: PropTypes.func,
  onChange: PropTypes.func,
};

export default LoginForm;
