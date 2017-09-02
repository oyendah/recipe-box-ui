import React from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

const LoginForm = () =>

  <div>
    <div className="row">
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
    </div>
    <Button
      type="submit"
      value="Login"/>
  </div>;

export default LoginForm;
