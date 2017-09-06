import React from 'react';
import classnames from 'classnames';

class FlashMessage extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this
      .props
      .deleteFlashMessage(this.props.message.id);
  }

  render() {
    const { type, text } = this.props.message;
    return (
      <div className="row">
        <div className="twelve column">
          <div
            id="card-alert"
            className={classnames('card', {
              success: type === 'success',
              error: type === 'error'
            })}>
            <div className="card-content">
              <p>{text}</p>
            </div>
            <a onClick={this.onClick}>
              <i className="fa fa-close">close</i>
            </a>
          </div>
        </div>
      </div>

    );
  }
}

FlashMessage.propTypes = {
  message: React.PropTypes.object.isRequired,
  deleteFlashMessage: React.PropTypes.func.isRequired
};

export default FlashMessage;
