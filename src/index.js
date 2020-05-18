import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import Modal from 'react-modal';

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
          year: "1937",
          id: 0,
        },
      ],
      showModal: false,
      lastID: 0,
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.addBook = this.addBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);

    Modal.setAppElement('#content');
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  // add the info from the form to the books array in the state
  addBook(book) {
    const { books, lastID } = this.state;
    const newID = lastID + 1;
    book.id = newID;
    const updatedBooks = [...books, book];
    this.setState({ books: updatedBooks, lastID: newID });
  }

  deleteBook( book ) {
    const { books } = this.state;
    var booksToKeep = [];

    for (var i=0; i<books.length; i++) {
      if (books[i].id != book.id) {
        booksToKeep.push(books[i]);
      }
    };
    this.setState({ books: booksToKeep });
  }

  render() {
    const { books } = this.state;
    console.log(this.state);

    return (
      <div>
        <button id="add-book" onClick={this.handleOpenModal}>
          Add Book
        </button>
        <ReactModal
           isOpen={this.state.showModal}
        >
          <Form
            addBook={this.addBook}
            closeForm={this.handleCloseModal}
          />
        </ReactModal>
        <ul>
          {books.map((book) =>
            <Card
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              year={book.year}
              deleteBook={this.deleteBook}
            />)}
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
