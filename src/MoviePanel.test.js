import React from 'react';
import ReactDOM from 'react-dom';
import MoviePanel from './MoviePanel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MoviePanel movie={
    {title:'test'}
  }/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
