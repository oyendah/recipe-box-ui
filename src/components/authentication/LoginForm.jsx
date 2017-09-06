import React from 'react';
import PropTypes from 'prop-types';
import Input from '../common/Input';
import Button from '../common/Button';

const LoginForm = ({ onSave, onChange, onAlert }) =>

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
        />
      </div>
    </div>
    <Button
      type="submit"
      value="Login"
      onClick={onSave}/>
    <Button
      type="submit"
      value="Alert"
      onClick={onAlert}/>
  </div>;


LoginForm.propTypes = {
  onSave: PropTypes.func,
  onChange: PropTypes.func,
  onAlert: PropTypes.func,
};

export default LoginForm;
