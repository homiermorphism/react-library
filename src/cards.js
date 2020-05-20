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
    const cardStyle = {
      backgroundColor: "var(--beige)",
      boxShadow: "0 0 20px 2px rgba(100, 28, 2, 0.15)",
      overflow: "scroll",
      padding: "20px",
      outline: "3px solid " + this.props.color,
      outlineOffset: "-8px",
      height: "200px",
      fontFamily: "'Slabo 27px', serif",
      position: "relative",
    };

    const titleStyle = {
      color: this.props.color,
    }

    const lineStyle = {
      border: "1.5px solid " + this.props.color,
    };

    const listStyle = {
      color: "var(--brown)",
      marginLeft: "-20px",
      listStyleType: "none",
    }

    const buttonStyle = {
      backgroundColor: this.props.color,
      border: "2px solid " + this.props.color,
      position: "absolute",
      bottom: "15px",
      right: "15px",
    };

    return (
      <div className="card" id={this.props.id} style={cardStyle}>
        <h2 id={"title"+this.props.id} style={titleStyle}>{this.props.title}</h2>
        <hr style={lineStyle}></hr>
        <ul style={listStyle}>
          <li id={"author"+this.props.id}><b>Written By</b> {this.props.author}</li>
          <li id={"year"+this.props.id}><b>In The Year</b> {this.props.year}</li>
        </ul>
        <button className="card-btn" style={buttonStyle} onClick={this.deleteBook}>
          <i className="material-icons md-18">delete</i>
        </button>
      </div>
    );
  }
};

export { Card };
