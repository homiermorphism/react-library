import React from 'react';
import ReactDOM from 'react-dom';

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
  <Container />,
  document.getElementById('content')
);
