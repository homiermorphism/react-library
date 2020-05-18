import React from 'react';
import ReactDOM from 'react-dom';

import { Container } from './index';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.deleteBook = this.deleteBook.bind(this);
  }

  deleteBook() {
    const book = {
      id: this.props.id,
      title: this.props.title,
      author: this.props.author,
      year: this.props.year,
    };
    this.props.deleteBook( book );
  }

  render() {
    return (
      <div className="card">
        <h1> Book </h1>
        <ul>
          <li id="title">title: {this.props.title}</li>
          <li id="author">author: {this.props.author}</li>
          <li id="year">year: {this.props.year}</li>
        </ul>
        <button onClick={this.deleteBook}>
          Delete
        </button>
      </div>
    );
  }
};

export { Card };
