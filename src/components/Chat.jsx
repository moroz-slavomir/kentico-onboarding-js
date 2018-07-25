import React from 'react';
import { BaseComponent } from './DemoChatComponentBase';
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
import { MessageForm } from './Where is it?';

export class Chat extends BaseComponent {
  constructor(props) {
    super(props); // Must be called to properly build the base object and initialize its prototype.

    /*
     * @TODO:
     * Add and initialize your state
     * You'll need to track two input fields: nickname and message text.
     */
  }

  sendMessage = () => {
    // @TODO: Take nickname and message text from the state (wherever you store it) and pass it to the postMessage function
    this.postMessage(/* nickname, messageText */);

    // @TODO: clear the message field after sending the message
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
          nick={this.state /* @TODO: where's the nick stored? */}
          onNickChange={/* @TODO: How do you update the nickname? */}
          message={/* @TODO: where's the message text stored? */}
          onMessageChange={/* @TODO: How do you update the message? */}
        />
      </div>
    );
  }
}
