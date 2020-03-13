import React from 'react'
import './HeroImage.css'

const HeroImage = (props) => {
  return (
    <div className="showPedia-heroimage" style={{
        background: `linear-gradient(to bottom, 
          rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url('${props.image}'), #1c1c1c`
      }}
    >
      <div className="showPedia-heroimage-content">
        <div className="showPedia-heroimage-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  )
}

export default HeroImage

