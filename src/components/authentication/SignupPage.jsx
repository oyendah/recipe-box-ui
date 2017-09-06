import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
// import _ from 'lodash';
import SignUpForm from './SignUpForm';
import { signup } from '../../actions';
import urls from '../../constants/urls';
import toast from '../../utils/toast';

class SignUpPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      error: '',
    };

    this.onSave = this.onSave.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    return this.setState({ user });
  }

  onSave(event) {
    event.preventDefault();

    this.props.signup(this.state.user).then(() => {
      if (!this.props.errorMessage) {
        toast.success('logged in successfully');
        this.redirect();
      } else {
        this.setState({ error: this.props.errorMessage });
        toast.error(this.props.errorMessage);
      }
    })
      .catch(() => {
        toast.error('Unable to login');
      });
  }

  redirect() {
    this.props.history.push(urls.HOME_PATH);
  }
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
            <SignUpForm
              onSave={this.onSave}
              onChange={this.onChange}/>
          </div>
        </div>
      </div>
    );
  }
}

SignUpPage.propTypes = {
  signup: PropTypes.func,
  history: PropTypes.object,
  errorMessage: PropTypes.string,
  auth: PropTypes.object,
  addFlashMessage: PropTypes.func,
};

const mapStateToProps = (state) => {
  const errorMessage = state.signup.errorMessage;
  return {
    errorMessage
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    signup,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
