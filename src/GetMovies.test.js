import React from 'react';
import ReactDOM from 'react-dom';
import GetMovies from './GetMovies';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GetMovies />, div);
  ReactDOM.unmountComponentAtNode(div);
});
