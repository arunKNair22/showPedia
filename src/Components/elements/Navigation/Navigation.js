import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = (props) => {
  return (
    <div className="showPedia-navigation">
      <div className="showPedia-navigation-content">
        <Link to="/"><p>Home</p></Link>
        <p>/</p>
        <p>{props.movie}</p>
      </div>
    </div>
  )
}

export default Navigation
