import React from 'react';
import PropTypes from 'prop-types';
import './MoviePanelSubDetail.css';

const MoviePanelSubDetail = ({data}) =>{

  const loding = () => {
    return (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    )
  }

  const displayListItems = (title, list, id) => {
    return(
      (list.length > 0) ? (
      <div className="subDetailList">
      <strong>{title}:</strong> <ul className="list-group">
        {list.map((item, i) =>
          {
            return (
              <li className={ (i%2)===0  ? "list-group-item" : "list-group-item list-group-item-dark" }
                  key={ id + title + item.name} >
                {item.name}
              </li>

            )
            })}
      </ul>
      </div> ) : null
  )
  }

  const displayData = () => {
    return(
      <div>
        <p><strong>Original Language:</strong> { data.original_language }</p>
        { (data.homepage !== null) ? (
          <p><strong>Homepage: </strong>
             <a href={data.homepage} target="_blank" rel="noopener noreferrer">{data.homepage}</a>
          </p>
        ) : null }
        <p><strong>Status:</strong> {data.status}</p>
        <div className="subDetails">
          { displayListItems('Genres', data.genres, data.id) }
          { displayListItems('Spoken Languages', data.spoken_languages, data.id) }
          { displayListItems('Production Countries', data.production_countries, data.id) }
          { displayListItems('Production Companies', data.production_companies, data.id) }
        </div>
        <p><strong>Rate: </strong>{ data.vote_average } / 10 </p>
      </div>
    )
  }

  return(
      <div className='subContent'>
        { (Object.getOwnPropertyNames(data).length === 0 ) ? loding() : displayData() }
      </div>
    )
  }

MoviePanelSubDetail.defaultProps = {
  data: {}
}
MoviePanelSubDetail.propTypes = {
  data: PropTypes.object.isRequired
};

export default MoviePanelSubDetail;
