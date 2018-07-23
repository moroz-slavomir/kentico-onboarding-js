import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const theThingIWantToHaveRendered = (
  <div className="a-random-classname">
    <h2>Hey a title!!!</h2>
    <p>
      A paragraph with text. How coole is that?
    </p>
    <p
      style={{
        textAlign: 'center',
        color: 'red',
      }}
    >
      And another one. Nothing can stop me. I'm on a roll.
    </p>
    <p align="center">
      Nothing but my lack of inspiration for making up unnecessarily personal lorem ipsum.
    </p>
  </div>
);

ReactDOM.render(theThingIWantToHaveRendered, document.getElementById('app-root'));
