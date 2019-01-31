import React, { Component } from 'react';
import GetMovies from './GetMovies';
import SearchResult from './SearchResult';
import './MovieSearch.css';
import C from './data/DbConst';

class MovieSearch extends Component {
  constructor(props){
    super(props);

    this.state = {
      movies: {},
      shrtQry: false
    }

    this.onSrcClk = this.onScrClk.bind(this);
    this.onFavClk = this.onFavClk.bind(this);
    this.runSearch = this.runSearch.bind(this);
  }

  runSearch(srcQry) {
    fetch(C.SRC_URL + srcQry.replace(/ /g, '+'))
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return Promise.resolve(response)
        } else {
          return Promise.reject(new Error(response.status))
        }
      })
      .then((response) => {return response.json()})
      .then((data) => {
        console.log('fetch:', data);
        this.setState({movies: data })
      }).catch((error) => {
        console.log('Request failed', error);
      })
  }

onScrClk(srcQry) {
  if (srcQry.length > 3) {
    this.setState({shrtQry: false});
    this.runSearch(srcQry)
  } else {
    this.setState({shrtQry: true});
  }
}

onFavClk(clkId) {
  this.props.onFavClk(clkId);
}

  render() {
    return (
      <div className="container-fluid">
        <GetMovies onClk= {this.onSrcClk} />
        { (this.state.shrtQry) ? (<p className="errorMsg">Minimum 3 character </p>) : null }
        { (this.state.movies.total_results === 0) ? (<p className="errorMsg">Not Found </p>) :
                                                   ( (this.state.movies.total_results > 0) ? (<p className="resultCnt">Result: { this.state.movies.total_results } </p>) : null ) }
        <SearchResult
          movies= {this.state.movies}
          favmovies= {this.props.favMovies}
          onFavClk= {this.onFavClk}/>
      </div>
    );
  }
}

export default MovieSearch;
