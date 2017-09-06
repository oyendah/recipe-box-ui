import React from 'react';
import { NavLink } from 'react-router-dom';
import * as styles from '../../styles/styles.scss';

export default class NavBarLink extends React.Component {
  render() {
    return <NavLink {...this.props} activeClassName={styles.active}/>;
  }
}
