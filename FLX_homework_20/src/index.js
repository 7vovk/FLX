import React, { Component } from 'react';
import { render } from 'react-dom';

import Music from './Music';

// Entry point for styles
import './scss/index.scss';

// Get the root node
const rootNode = document.querySelector('#root');

// Entry point for the application
class App extends Component {
  render() {
      return (
          <div>
              <Music music={Music} />
          </div>
      );
  }
}

render(
  <App />,
  rootNode,
);
