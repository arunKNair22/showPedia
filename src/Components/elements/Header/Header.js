import React, { Component } from 'react'
import './Header.css'

export class Header extends Component {
  render() {
    return (
      <div className="rmdb-header">
        <div className="rmdb-header-content">
          <img src="./img/showpedia-logo.png" alt="showPedia" className="rmdb-logo"/>
          <img src="./img/tmdb-green-logo.png" alt="powered by tmdb" className="rmdb-tmdb-logo"/>
        </div>
      </div>
    )
  }
}

export default Header
