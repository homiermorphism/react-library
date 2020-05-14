import React from 'react';
import ReactDOM from 'react-dom';

import { Container } from './index';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1> Book </h1>
        title: {this.props.title}
        author: {this.props.author}
        year: {this.props.year}
      </div>
    );
  }
};

export { Card };
