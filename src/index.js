import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';

import { Card } from './cards';
import { Form } from './form';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Library",
    }
  }

  render() {
    const title = this.state.title;
    return (
      <div id="header">
        <h1>{title}</h1>
      </div>
    )
  }
};

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          title: "The Hobbit",
          author: "J.R.R. Tolkien",
          year: "early as fuck",
        },
        {
          title: "The Cat In The Hat",
          author: "Dr. Suess",
          year: "70's",
        },
      ],
      showModal: false
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    const books = this.state.books;
    return (
      <div>
        <button id="add-book" onClick={this.handleOpenModal}>
          Add Book
        </button>
        <ReactModal
           isOpen={this.state.showModal}
        >
          <Form />
          <button id="close-modal" onClick={this.handleCloseModal}>
            Close Form
          </button>
        </ReactModal>
        <ul>
          {books.map((book) => <Card key={book.title} author={book.author} year={book.year}/>)}
        </ul>
      </div>
    );
  }
};

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://github.com/homiermorphism',
    }
  }

  render() {
    const url = this.state.url;
    return (
      <div id="footer">
        <a href={url}>made by homiermorphism</a>
      </div>
    )
  }
};

ReactDOM.render(
  <div>
    <Header />
    <Container />
    <Footer />
  </div>,
  document.getElementById('content')
);
