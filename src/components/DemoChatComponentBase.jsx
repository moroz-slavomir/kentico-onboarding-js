/* eslint-disable react/no-unused-state,no-console */
import React from 'react';
import uuidv4 from 'uuid/v4';

export function createGuid() {
  return uuidv4();
}

let messages = [];

export class BaseComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      messages: [],
    };

    setInterval(this.getMessages, 2000);
  }

  getMessages = () => {
    console.log('Getting messages!!!');
    this.setState({
      messages,
    });
  };

  postMessage = (nickName, message) => {
    console.log(`Sending message from '${nickName}' saying '${message}'.`);
    messages = [
      ...messages, {
        from: nickName,
        text: message,
        id: createGuid(),
      }
    ];
  };
}
