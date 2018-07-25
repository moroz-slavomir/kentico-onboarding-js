/* eslint-disable react/no-unused-state */
import React from 'react';

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
      messages: [
        {
          id: 'asdfasfsa',
          nickName: 'Viclick',
          text: 'Hello World!!!',
        },
      ],
    });
  };

  postMessage = (nickName, message) => {
    console.log(`Sending message from '${nickName}' saying '${message}'.`);
  };
}
