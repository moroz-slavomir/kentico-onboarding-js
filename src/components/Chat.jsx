import React from 'react';
import { BaseComponent } from './DemoChatComponentBase';
import { MessageList } from './MessageList';
import { MessageForm } from './MessageForm';

export class Chat extends BaseComponent {
  constructor() {
    super(); // Must be called to properly build the base object and initialize its prototype.

    /*
     * Add and initialize new state properties in the style of:
     * this.state.newProp = newValue;
     */

    this.state.nickName = '';
    this.state.messageText = '';
  }

  sendMessage = () => {
    this.postMessage(this.state.nickName, this.state.messageText);
    this.setState({ messageText: '' });
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
          onNickChange={(newNick) => this.setState({ nickName: newNick })}
          message={this.state.messageText}
          onMessageChange={newMessage => this.setState({ messageText: newMessage })}
        />
      </div>
    );
  }
}
