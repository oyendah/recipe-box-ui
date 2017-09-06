import React from 'react';

/**
 * HomePage Component
 */
export default class HomePage extends React.Component {
  /**
   * React Render
   * @return {object} html
   */
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="eleven column">
            <h4 className="hero-heading">Welcome to Recipes Box</h4>
            <a className="button button-primary"
              href="http://getskeleton.com">Try Skeleton</a>
          </div>
        </div>
      </div>
    );
  }
}

