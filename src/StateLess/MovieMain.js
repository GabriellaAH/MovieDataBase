import React from 'react';
import './MovieMain.css';
import MovieSearch from './../MovieSearch';
import MovieFavourite from './MovieFavourite';
import { Route, Link, Switch } from 'react-router-dom'

const MovieMain = (props) =>{

  return (
    <div className=' container'>
      <div className="container-fluid">
        <nav className="MovieMain container-fluid">
          <h1>Yoyo Cinema Movie Database</h1>
          <Link to='/search'>
          <button type="button"
                  className={(props.location.pathname === '/search') ? "btn btn-dark btn-lg" : "btn btn-outline-dark btn-lg" }>Search
          </button>
          </Link>
          <Link to='/favourite'>
          <button type="button"
                  className={(props.location.pathname === '/favourite') ? "btn btn-dark btn-lg" : "btn btn-outline-dark btn-lg" }>My favourites
          </button>
          </Link>
        </nav>
        <main className="container-fluid">
            <div>
            <Switch>
              <Route path="/search" component={() => <MovieSearch /> } />
              <Route path="/favourite" component={() => <MovieFavourite /> } />
            </Switch>
            </div>
        </main>
      </div>
    </div>
  );
}

export default MovieMain;
