import React from 'react'
import './FourColGrid.css'

const FourColGrid = (props) => {

  const renderElements = () => {
    const gridElements = props.children.map((element, i) => {
      return(
        <div key={i} className="showPedia-grid-element">
          {element}
        </div>
      )
    })
    return gridElements;
  }

  return (
    <div className="showPedia-grid">
      {props.header && !props.loading ? <h1>{props.header}</h1> : null }
      <div className="showPedia-grid-content">
        {
          renderElements()
        }
      </div>
    </div>
  )
}

export default FourColGrid

