import React from 'react';
import PropTypes from 'prop-types';
import NavBarLink from './NavBarLink';

class Header extends React.Component {
  render() {
    const { isAuthenticated, logout } = this.props;
    return (

      <div className="band navigation">
        <div className="container">
          <nav className="primary">
            <div className="sixteen columns">
              <ul>
                <li><NavBarLink exact to="/">Home</NavBarLink></li>
                {!isAuthenticated ?
                  <li><NavBarLink to="/login">Login</NavBarLink></li> : ''
                }
                {!isAuthenticated ?
                  <li><NavBarLink to="/signup">Sign Up</NavBarLink></li> :
                  <li onClick={logout}>
                    <NavBarLink to="/login">Logout</NavBarLink></li>
                }
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
  logout: PropTypes.func,
};

export default Header;
