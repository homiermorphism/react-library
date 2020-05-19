import React from 'react';
import ReactDOM from 'react-dom';

import { Container } from './index';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    }

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
    const cardStyle = {
      backgroundColor: "var(--dark-green)",
      boxShadow: "0 7px 20px 1px rgba(100, 28, 2, 0.5)",
      overflow: "scroll",
      padding: "20px",
      color: "var(--beige)",
      outline: "2px solid " + this.props.color,
      outlineOffset: "-8px",
      margin: "10px",
    };

    const buttonStyle = {
      backgroundColor: this.props.color,
      border: "2px solid " + this.props.color,
    }

    return (
      <div id={this.props.id} style={cardStyle}>
        <h2 id={"title"+this.props.id}>{this.props.title}</h2>
        <ul>
          <li id={"author"+this.props.id}>author: {this.props.author}</li>
          <li id={"year"+this.props.id}>year: {this.props.year}</li>
        </ul>
        <button className="card-btn" style={buttonStyle} onClick={this.deleteBook}>
          <i className="material-icons md-18">delete</i>
        </button>
      </div>
    );
  }
};

export { Card };
