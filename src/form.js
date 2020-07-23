import React from 'react';
import ReactDOM from 'react-dom';

import { Container } from './index';
import { SetStatusIcon } from './util';
import { ChangeStatus } from './util';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      year: "",
      status: "unread",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
  }

  handleChange(event) {
    const id = event.target.id;
    if (id === "title") {
      this.setState({ title: event.target.value });
    } else if (id === "author") {
      this.setState({ author: event.target.value });
    } else if (id === "year") {
      this.setState({ year: event.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, author, year, status } = this.state;
    const book = {
      title: title,
      author: author,
      year: year,
      status: status,
    };
    if (book.title==="" || book.author==="") {
      alert("Title and author are both required.");
      return;
    } else {
      this.props.addBook( book );
      this.props.closeForm();
    }
  }

  updateStatus() {
    var newStatus = ChangeStatus( this.state.status );
    this.setState({ status: newStatus });
    return newStatus;
  }

  render() {
    return (
      <form className="form">
        <button className="close-btn" onClick={this.props.closeForm}>
          <i className="material-icons">cancel</i>
        </button>
        <h2>Add Book</h2>
        <label>
          Title:
        </label>
        <input
          type="text"
          id="title"
          value={this.state.title}
          onChange={this.handleChange}
          placeholder="Enter title"
        />
        <br />
        <label>
          Author:
        </label>
        <input
          type="text"
          id="author"
          value={this.state.author}
          onChange={this.handleChange}
          placeholder="Enter author"
        />
        <br />
        <label>
          Year:
        </label>
        <input
          type="text"
          id="year"
          value={this.state.year}
          onChange={this.handleChange}
          placeholder="Enter year"
        />
        <br />
        <label>
          Status:
        </label>
        <button className="submit-btn" onClick={this.updateStatus}>
          <i className="material-icons">{SetStatusIcon( this.state.status )}</i>
        </button>
        <br />
        <button className="submit-btn" onClick={this.handleSubmit}>
          <i className="material-icons">library_add_check</i>
        </button>
      </form>
    );
  }
}

export { Form };
