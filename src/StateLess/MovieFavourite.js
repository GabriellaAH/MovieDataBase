import React from 'react';
import SearchResult from './SearchResult';
import { GetLocalData } from './../data/LocalDatas';

const MovieFavourite = () => {

    let movies = {
      results: GetLocalData()
    };
    return (
      <div className="container-fluid">
        {(Object.getOwnPropertyNames(movies.results).length !== 0 ) ? (
        <SearchResult
          movies= {movies}
          favmovies= {movies.results}/>) : null}
      </div>
    );
}

export default MovieFavourite;
