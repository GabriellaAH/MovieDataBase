import React, { Component } from 'react';
import './MovieMain.css';
import MovieSearch from './MovieSearch';
import MovieFavourite from './MovieFavourite';

class MovieMain extends Component {
  constructor(props){
    super(props);

    this.state = ({
      favMovies: [],
      searchVisible: false,
      favVisible: false
    });
    this.onFavClk = this.onFavClk.bind(this);
    this.onScrClk = this.onScrClk.bind(this);
    this.onMyFavClk = this.onMyFavClk.bind(this);
  }

  componentDidMount(){
    let fav = JSON.parse(localStorage.getItem('favMovies'));
    if (fav === null)
    {
       fav = [];
    }
    this.setState({
      favMovies: fav
    })
  }

  componentDidUpdate(){
    localStorage.setItem('favMovies', JSON.stringify(this.state.favMovies));
  }

  onFavClk(clkId) {
    if (clkId !== undefined) {
      (this.state.favMovies.filter(mov => mov.id === clkId.id ).length > 0 ) ?
      (
        this.setState((prevState) => ({
          favMovies: [...prevState.favMovies.filter(mov => mov.id!==clkId.id)]
        })
      ))
      :
      (
        this.setState((prevState) => ({
          favMovies: [...prevState.favMovies, clkId]
        })
      ))
    }
  }

  onScrClk(){
    this.setState({
      searchVisible: true,
      favVisible: false
    })
  }

  onMyFavClk(){
    this.setState({
      searchVisible: false,
      favVisible: true
    })
  }



  render() {
    return (
      <div className=' container'>
      <div className="container-fluid">
        <nav className="MovieMain container-fluid">
          <h1>Yoyo Cinema Movie Database</h1>
          <button type="button"
                  className={(this.state.searchVisible) ? "btn btn-dark btn-lg" : "btn btn-outline-dark btn-lg" }
                  onClick={this.onScrClk}>Search
          </button>
          <button type="button"
                  className={(this.state.favVisible) ? "btn btn-dark btn-lg" : "btn btn-outline-dark btn-lg" }
                  onClick={this.onMyFavClk}>My favourites
          </button>
        </nav>
        <main className="container-fluid">
          { (this.state.searchVisible) ?
            <MovieSearch favMovies={this.state.favMovies} onFavClk={this.onFavClk}/> : null }
          { (this.state.favVisible) ?
            <MovieFavourite favMovies={this.state.favMovies} onFavClk={this.onFavClk}/> : null }
        </main>
      </div>
      </div>
    );
  }
}

export default MovieMain;
