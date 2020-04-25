import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class GameBoard extends React.Component {
  render() {
    return (
      <div>
        Game of life goes here
      </div>
    );
  }
}

ReactDOM.render(
  <GameBoard />,
  document.getElementById('root')
);
