import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import MovieApp from './components/MovieApp';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MovieApp />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
