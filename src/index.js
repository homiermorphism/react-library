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
}

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

ReactDOM.render(
  <div>
    <Header />
    <Container />
  </div>,
  document.getElementById('content')
);
