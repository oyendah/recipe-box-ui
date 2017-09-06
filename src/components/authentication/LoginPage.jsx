import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
// import _ from 'lodash';
import toastr from 'toastr';
import { ToastContainer, ToastMessage } from 'react-toastr';
import LoginForm from './LoginForm';
import { login, addFlashMessage } from '../../actions';

const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      error: '',
    };

    this.onSave = this.onSave.bind(this);
    this.onChange = this.onChange.bind(this);
    this.renderErrorMessage = this.renderErrorMessage.bind(this);
    this.onAlert = this.onAlert.bind(this);
  }


  componentDidUpdate(prevProps, prevState) {
    if (this.state.error) {
      this.renderErrorMessage(prevState.error);
    }
  }

  onChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    return this.setState({ user });
  }

  onSave(event) {
    event.preventDefault();

    this
      .props
      .login(this.state.user)
      .then(() => {
        if (!this.props.errorMessage) {
          this.redirect();
        } else {
          this.setState({ error: this.props.errorMessage });
        }
      })
      .catch(() => {
        toastr.error('Unable to login');
      });
  }

  onAlert() {
    this.props.addFlashMessage({
      type: 'error', text: 'Unable to login' });
  }

  redirect() {
    this.props.history.push('/');
  }

  renderErrorMessage(message) {
    return this.refs.container.error(message,
      'Error', {
        timeOut: 10000,
        extendedTimeOut: 10000,
        preventDuplicates: true,
        positionClass: 'toast-bottom-full-width',
        showMethod: 'fadeIn',
        hideMethod: 'fadeOut'
      });
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
            <h4 className="hero-heading">Login</h4>
            <LoginForm
              onChange={this.onChange}
              onSave={this.onSave}
              onAlert={this.onAlert}
            />
          </div>
        </div>
        <ToastContainer
          toastMessageFactory={ToastMessageFactory}
          ref="container"
          className="toast-top-right"
        />
      </div>
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.func,
  history: PropTypes.object,
  errorMessage: PropTypes.string,
  auth: PropTypes.object,
  addFlashMessage: PropTypes.func,
};

const mapStateToProps = (state) => {
  const errorMessage = state.auth.errorMessage;
  return {
    errorMessage
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    login,
    addFlashMessage,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
