import React from 'react';
import ReactDOM from 'react-dom';
import MovieApp from './components/MovieApp';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MovieApp />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
