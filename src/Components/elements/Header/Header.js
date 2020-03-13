import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export class Header extends Component {
  render() {
    return (
      <div className="showPedia-header">
        <div className="showPedia-header-content">
          <Link to="/">
            <img src="./img/showpedia-logo.png" alt="showPedia" className="showPedia-logo"/>
          </Link>
          <img src="./img/tmdb-green-logo.png" alt="powered by tmdb" className="showPedia-tmdb-logo"/>
        </div>
      </div>
    )
  }
}

export default Header
