import React from 'react';
import ReactDOM from 'react-dom';

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
      message: 'hi',
    }
  }

  render() {
    const message = this.state.message;
    return (
      <div>
        {message}
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
}

ReactDOM.render(
  <div>
    <Header />
    <Container />
    <Footer />
  </div>,
  document.getElementById('content')
);
