import React, { Component } from 'react';
import MoviePanel from './MoviePanel';


class SearchResult extends Component{
  constructor(props) {
    super(props);
    this.onFavClk = this.onFavClk.bind(this);
  }

  onFavClk(id) {
    this.props.onFavClk(id);
  }

  CreatMovieItem() {
    let movies = this.props.movies.results;
    return(
      <div>
      { movies.map((movie) => {
          return (<MoviePanel movie={ movie }
                              key = { movie.id }
                              fav= { (this.props.favmovies.filter(mov => mov.id === movie.id ).length > 0 ) ? 1 : 0 }
                              onFavClk= {this.onFavClk} />
                            )
        }) }
      </div>
    );
  }

  ShowResult() {
    return (
      <div>
        { (Object.getOwnPropertyNames(this.props.movies).length !== 0 ) ? (this.CreatMovieItem()) : null }
      </div>
    )
  }

  render() {
    return (
      <div>
        { this.ShowResult() }
      </div>
    );
  }
}

export default SearchResult;
