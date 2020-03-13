import React from 'react'
import {
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
} from '../../../config';
import MovieThumb from '../MovieThumb/MovieThumb'
import './MovieInfo.css'

function MovieInfo(props) {
  console.log(props)
  return (
    <div className="showPedia-movieinfo" style={{
      background: props.movie.backdrop_path ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.movie.backdrop_path}')` : '#000'
    }}>
      <div className="showPedia-movieinfo-content">
        <div className="showPedia-movieinfo-thumb">
          <MovieThumb 
            image={props.movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.movie.poster_path}` : './img/no_image.jpg'}
            clickable={false}
          />
        </div>
        <div className="showPedia-movieinfo-text">
          <h1>{props.movie.title}</h1>
          <h3>Plot</h3>
          <p>{props.movie.overview}</p>
          <h3>IMDB rating</h3>
          
         <div className="showPedia-rating">
          <meter 
            min="0" 
            max="100" 
            optimum="100" 
            low="40" 
            high="70" 
            value={props.movie.vote_average * 10}
          ></meter>
          <p className="showPedia-score"> {props.movie.vote_average} </p>
          </div>
            {props.directors.length > 1 ? <h3>Directors</h3> : <h3>Director</h3> }
            {props.directors.map((element, i) => {
              return <div key={i} className="showPedia-director">{element.name}</div>
            })}
        </div>
      </div>  
    </div>
  )
}


export default MovieInfo

