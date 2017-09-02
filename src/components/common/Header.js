import React from 'react';
import * as styles from '../../styles/styles.scss';
import NavBarLink from './NavBarLink';

const Header = () =>
  <div className="band navigation">
    <div className="container">
      <nav className={styles.primary}>
        <div className="sixteen columns">
          <ul>
            <li><NavBarLink exact to="/">Home</NavBarLink></li>
            <li><NavBarLink to="/signup">Sign Up</NavBarLink></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </div>;


export default Header;
