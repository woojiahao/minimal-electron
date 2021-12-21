import React from 'react';
import ReactDOM from 'react-dom';
import './app.global.css';

const App = () => {
  return (
    <div className="container">
      <p className="font-mono">
        Hello world!!!! :)'boop'
      </p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));