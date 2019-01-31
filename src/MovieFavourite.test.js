import React from 'react';
import ReactDOM from 'react-dom';
import MovieFavourite from './MovieFavourite';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const myMock = jest.fn();
  console.log(myMock());
  ReactDOM.render(<MovieFavourite onFavClk={myMock()} favMovies={[]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
