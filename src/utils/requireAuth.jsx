import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import toast from '../utils/toast';
import urls from '../constants/urls';

/**
 *
 *
 * @export
 * @param {any} ComposedComponent
 * @returns {any}
 */
export default function (ComposedComponent) {
  class Authenticate extends React.Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        toast.error('You need to login to access this page');
        this.props.history.push(urls.LOGIN_PATH);
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        toast.error('You need to login to access this page');
        this.props.history.push(urls.LOGIN_PATH);
      }
    }

    render() {
      return (<ComposedComponent {...this.props}/>);
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired
  };

  /**
 *
 *
 * @param {any} state
 * @returns {boolean}
 */
  function mapStateToProps(state) {
    return { isAuthenticated: state.auth.isAuthenticated };
  }

  return connect(mapStateToProps)(Authenticate);
}
