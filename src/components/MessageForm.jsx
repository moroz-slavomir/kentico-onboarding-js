import React from 'react';
import PropTypes from 'prop-types';

export class MessageForm extends React.Component {
  static propTypes = {
    onNickChange: PropTypes.func.isRequired,
    onMessageChange: PropTypes.func.isRequired,
    onSend: PropTypes.func.isRequired,
    nick: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  };

  onNickChange = (event) => {
    this.props.onNickChange(event.target.value);
  };

  onMessageChange = (event) => {
    this.props.onMessageChange(event.target.value);
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSend();
  };

  render() {
    return (
      <form
        className="message-form"
        onSubmit={this.onSubmit}
      >
        <label
          htmlFor="nick"
          className="message-form__nick-label"
        >
          Nick:
        </label>
        <input
          className="message-form__nick-input"
          id="nick"
          value={this.props.nick}
          onChange={this.onNickChange}
        />
        <label
          className="message-form__message-label"
          htmlFor="message"
        >
          Message:
        </label>
        <input
          id="message"
          className="message-form__message-input"
          value={this.props.message}
          onChange={this.onMessageChange}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}
