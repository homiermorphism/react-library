import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import Modal from 'react-modal';

import { Card } from './cards';
import { Form } from './form';
import { ChangeStatus } from './util';

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
          id: 1,
          color: "var(--light-blue)",
          status: "read",
        },
        {
          title: "How To Kill a Mockingbird",
          author: "Harper Lee",
          year: "1960",
          id: 2,
          color: "var(--light-green)",
          status: "unread",
        },
        {
          title: "The Tortilla Curtain",
          author: "T.C. Boyle",
          year: "1995",
          id: 3,
          color: "var(--orange)",
          status: "in progress",
        },
        {
          title: "Ender's Game",
          author: "Orson Scott Card",
          year: "1985",
          id: 4,
          color: "var(--light-blue)",
          status: "read",
        },
      ],
      showModal: false,
      lastID: 4,
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
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

  setColor( array ) {
    const colors = {
      orange: "var(--orange)",
      blue: "var(--light-blue)",
      green: "var(--light-green)",
    };
    array.forEach((item) => {
      let i = array.indexOf(item);
      if (i % 3 === 0) {
        item.color = colors.blue;
      } else if (i % 3 === 1) {
        item.color = colors.green;
      } else if (i % 3 === 2) {
        item.color = colors.orange;
      }
    });
    return array;
  }

  updateStatus( id, status ) {
    const { books } = this.state;
    var newStatus = ChangeStatus(status);
    var updatedBooks = books;

    for (var i=0; i < updatedBooks.length; i++) {
      if (id === updatedBooks[i].id) {
        updatedBooks[i].status = newStatus;
      }
    };
    this.setState({ books: updatedBooks });
  }

  // add the info from the form to the books array in the state
  addBook( book ) {
    const { books, lastID } = this.state;
    const newID = lastID + 1;
    book.id = newID;
    let updatedBooks = [...books, book];
    this.setState({ books: this.setColor( updatedBooks ), lastID: newID });
  }

  // delete the book from the container
  deleteBook( book ) {
    const { books } = this.state;
    var booksToKeep = [];

    for (var i=0; i<books.length; i++) {
      if (books[i].id != book.id) {
        booksToKeep.push(books[i]);
      }
    };
    this.setState({ books: this.setColor( booksToKeep ) });
  }

  render() {
    const { books } = this.state;

    return (
      <div className="container">
        <div className="button-banner">
          <button className="add-btn" onClick={this.handleOpenModal}>
            <i className="material-icons">library_add</i>
          </button>
        </div>
        <ReactModal
           isOpen={this.state.showModal}
           className="modal-form"
        >
          <Form
            addBook={this.addBook}
            closeForm={this.handleCloseModal}
          />
        </ReactModal>
        <ul className="card-container">
          {books.map((book) =>
            <Card
              key={book.id}
              id={book.id}
              color={book.color}
              title={book.title}
              author={book.author}
              year={book.year}
              deleteBook={this.deleteBook}
              status={book.status}
              updateStatus={this.updateStatus}
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
