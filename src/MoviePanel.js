import React, { Component } from 'react';
import './MoviePanel.css';
import MoviePanelSubDetail from './MoviePanelSubDetail';
import C from './data/DbConst';

class MoviePanel extends Component {

  constructor(props){
    super(props)

    this.state = ({
      style: {display: 'none'},
      btnText: 'Show Details',
      show: 0,
      movieDetail: {}
    })
    this.onDetailsClk = this.onDetailsClk.bind(this);
    this.onFavClk = this.onFavClk.bind(this);
    this.getMovieDetails = this.getMovieDetails.bind(this);
  }

  onDetailsClk(){
      if (this.state.show === 0) {
        this.setState({style: {display:'block'},
                       btnText: 'Hide Details',
                       show: 1 });
        this.getMovieDetails(this.props.movie.id)
      } else {
        this.setState({style: {display: 'none'},
                       btnText: 'Show Details',
                       show: 0 })
      }

  }

  onFavClk(){
    let favObj = {
      id: this.props.movie.id,
      title: this.props.movie.title,
      release_date: this.props.movie.release_date,
      overview: this.props.movie.overview,
      poster_path: this.props.movie.poster_path
    }

    this.props.onFavClk(favObj)
  }

  getMovieDetails(id) {
    fetch(C.DETAIL_URL.replace(/{Id}/g, id))
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
        this.setState({movieDetail: data })
      }).catch((error) => {
        console.log('Request failed', error);
      })
  }

  render()
  {
    let movie = this.props.movie;
    return(
        <div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{ movie.title }</h5>
              <h6 className="card-subtitle mb-2 text-muted">Release date: { movie.release_date }</h6>
              <button type="button" className="btn btn-outline-dark btn-sm" onClick={this.onDetailsClk}>{ this.state.btnText }</button>
              <div style={this.state.style} className="movieDetailContainer">
                <div className="movieImgAndText">
                  { (movie.poster_path !== null) ?
                    (<div className="container-fluid imgbox">
                      <img src={ C.IMG_URL + movie.poster_path } alt="poster" />
                    </div>) : null }
                  <div className="container-fluid textBox">
                    <p className="card-text">{ movie.overview }</p>
                  </div>
                </div>
                <MoviePanelSubDetail data={this.state.movieDetail} key={movie.id} />
              </div>
              <div>
                <button type="button"
                        className={ (this.props.fav === 1) ? "btn btn-success btn-sm btn-mrgn" : "btn btn-outline-success btn-sm btn-mrgn"}
                        onClick={this.onFavClk}>
                  { (this.props.fav === 1) ? 'Remove from ' : 'Add to '} Favourite
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

export default MoviePanel;
