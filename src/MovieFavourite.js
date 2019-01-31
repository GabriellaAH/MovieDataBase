import React, { Component } from 'react';
import SearchResult from './SearchResult';

class MovieFavourite extends Component {
  constructor(props){
    super(props);
    this.onFavClk = this.onFavClk.bind(this);
  }

  onFavClk(clkId) {
    this.props.onFavClk(clkId);
  }

  render() {
    let movies = {
      results: this.props.favMovies
    }
    return (
      <div className="container-fluid">
        {(Object.getOwnPropertyNames(this.props.favMovies).length !== 0 ) ? (
        <SearchResult
          movies= {movies}
          favmovies= {this.props.favMovies}
          onFavClk= {this.onFavClk}/>) : null}
      </div>
    );
  }
}

export default MovieFavourite;
