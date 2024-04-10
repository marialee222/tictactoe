import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'; // Import your CSS file
import Game from './tictactoe';


ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById('root')
);
