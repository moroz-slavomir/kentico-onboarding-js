import React from 'react';
import { BaseComponent } from './DemoChatComponentBase';

export class Chat extends BaseComponent {
  constructor() {
    super();

    /*
     * Add and initialize new state properties in the style of:
     * this.state.newProp = newValue;
     */

    this.state.formState = {
      nickName: '',
      messageText: '',
    };
  }

  componentDidMount() {
    this.postMessage('random name', 'random message');
  }

  render() {
    /**
     * Render your list of messages and message form here
     * this.state has the shape of
     * {
     *   messages: Array<{
     *     id: string,
     *     from: string,
     *     text: string,
     *   }>,
     *   ... Whatever you add to it.
     **/

    return null;
  }
}
