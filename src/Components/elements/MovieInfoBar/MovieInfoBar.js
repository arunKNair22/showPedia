import React from 'react'
import { calcTime, convertMoney } from '../../../helpers'
import './MovieInfoBar.css'

const MovieInfoBar = (props) => {
  return (
    <div className="showPedia-movie-infobar">
      <div className="showPedia-movieinfobar-content">
        <div className="showPedia-movieinfobar-content-col">
          <span className="showPedia-movieinfobar-info">Running Time: {calcTime(props.time)}</span>
        </div>
        <div className="showPedia-movieinfobar-content-col">
          <span className="showPedia-movieinfobar-info">Budget: {convertMoney(props.budget)}</span>
        </div>
        <div className="showPedia-movieinfobar-content-col">
          <span className="showPedia-movieinfobar-info">Revenue: {convertMoney(props.revenue)}</span>
        </div>
      </div>
    </div>
  )
}

export default MovieInfoBar
