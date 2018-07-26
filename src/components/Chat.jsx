import React from 'react';
import { MessageList } from './MessageList';

/*
 * @TODO: Create your own component MessageForm.
 * Look at the suggested API of the component.
 * Look at the suggested-form-markup.html.
 *
 * The component will house two managed input fields.
 * Since we'll store all the state in this component, MessageForm will have to let this component know about the changes.
 * This component will send information about the current state to the MessageForm.
 *
 * When you're ready, run 'npm run start' in your command-line.
 */

// @TODO: Import the MessageForm component here.
import { MessageForm } from './MessageForm';

export class Chat extends React.Component {
  constructor(props) {
    super(props); // Must be called to properly build the base object and initialize its prototype.

    this.state = {
      nick: '',
      message: '',
    };
    /*
     * @TODO:
     * Add and initialize your state
     * You'll need to track two input fields: nickname and message text.
     */
  }

  // <editor-fold desc="Message sending and getting — DO NOT TOUCH" defaultstate="collapsed">

  getMessages = () => {
    console.log('Getting messages!!!');
    this.setState({
      messages: this.messages,
    });
  };

  getMessagesInterval = setInterval(this.getMessages, 2000);
  // eslint-disable-next-line global-require
  uuidv4 = require('uuid/v4');
  messages = [];

  createGuid = () => {
    return this.uuidv4();
  };

  postMessage = (nickName, message) => {
    console.log(`Sending message from '${nickName}' saying '${message}'.`);
    this.messages = [
      ...this.messages, {
        from: nickName,
        text: message,
        id: this.createGuid(),
      }
    ];
  };

  // </editor-fold>

  updateMessage = (message) => {
    this.setState({ message });
  };

  updateNick = (nick) => {
    this.setState({ nick });
  };

  sendMessage = () => {
    // @TODO: Take nickname and message text from the state (wherever you store it) and pass it to the postMessage function
    this.postMessage(this.state.nick, this.state.message);

    // @TODO: clear the message field after sending the message
    this.updateMessage('');
  };

  render() {
    /*
     * @TODO: Render your list of messages and message form here
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
          nick={this.state.nick /* @TODO: where's the nick stored? */}
          onNickChange={this.updateNick/* @TODO: How do you update the nickname? */}
          message={this.state.message/* @TODO: where's the message text stored? */}
          onMessageChange={this.updateMessage/* @TODO: How do you update the message? */}
        />
      </div>
    );
  }
}
