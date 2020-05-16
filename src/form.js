import React from 'react';
import ReactDOM from 'react-dom';

import { Container } from './index';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      year: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.id === "title") {
      this.setState({ title: event.target.value });
    } else if (event.target.id === "author") {
      this.setState({ author: event.target.value });
    } else if (event.target.id === "year") {
      this.setState({ year: event.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, author, year } = this.state;
    const book = {
      title: title,
      author: author,
      year: year,
    }
    if (book.title==="" || book.author==="") {
      alert("Title and author are both required.");
      return;
    } else {
      this.props.addBook( book );
      this.props.closeForm();
    }
  }

  render() {
    console.log(this.state);

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type="text" id="title" value={this.state.title} onChange={this.handleChange} />
        </label>
        <label>
          Author:
          <input type="text" id="author" value={this.state.author} onChange={this.handleChange} />
        </label>
        <label>
          Year:
          <input type="text" id="year" value={this.state.year} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export { Form };
