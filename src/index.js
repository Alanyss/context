import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return <div className="ui container">App</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
