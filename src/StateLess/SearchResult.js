import React from 'react';
import MoviePanel from './../MoviePanel';


const SearchResult = ({movies}) => {

  const CreatMovieItem = (movies) => {
    return(
      <div>
      { movies.results.map((movie) => {
          return (<MoviePanel movie={ movie }
                              key = { movie.id } />
                            )
        }) }
      </div>
    );
  }

  const ShowResult = (movies) => {
    return (
      <div>
        { (Object.getOwnPropertyNames(movies).length !== 0 ) ? (CreatMovieItem(movies)) : null }
      </div>
    )
  }

  return (
    <div>
      { ShowResult(movies) }
    </div>
  );
}

export default SearchResult;
