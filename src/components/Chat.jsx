import React from 'react';
import { BaseComponent } from './DemoChatComponentBase';
import { MessageList } from './MessageList';
import { MessageForm } from './MessageForm';

export class Chat extends BaseComponent {
  constructor(props) {
    super(props); // Must be called to properly build the base object and initialize its prototype.

    /*
     * Add and initialize your state
     * You'll need to track two input fields: nickname and message text.
     */

    this.state = {
      nickName: '',
      messageText: ''
    };
  }

  sendMessage = () => {
    this.postMessage(this.state.nickName, this.state.messageText);
    this.setState({ messageText: '' });
  };

  updateNick = (newNick) => {
    this.setState({ nickName: newNick });
  };

  updateMessage = (newMessage) => {
    this.setState({ messageText: newMessage });
  };

  render() {
    /*
     * Render your list of messages and message form here
     * this.state has the shape of
     * {
     *   messages: Array<{
     *     id: string,
     *     from: string,
     *     text: string,
     *   }>,
     *   ... Whatever you add to it.
     */

    return (
      <div className="chat">
        <MessageList messages={this.state.messages} />
        <MessageForm
          onSend={this.sendMessage}
          nick={this.state.nickName}
          onNickChange={this.updateNick}
          message={this.state.messageText}
          onMessageChange={this.updateMessage}
        />
      </div>
    );
  }
}
