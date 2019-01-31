import React from 'react';
import ReactDOM from 'react-dom';
import MovieMain from './MovieMain';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MovieMain />, div);
  ReactDOM.unmountComponentAtNode(div);
});
