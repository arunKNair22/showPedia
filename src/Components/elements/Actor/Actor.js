import React from 'react'
import {
  IMAGE_BASE_URL,
} from '../../../config';
import './Actor.css'

const Actor = (props) => {

  const POSTER_SIZE="w154";

  return (
    <div className="showPedia-actor">
      <img 
        src={props.actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.actor.profile_path}` : './img/no_image.jpg' }
        alt="actor thumb"
      />
      <span className="showPedia-actor-name">{props.actor.name}</span>
      <span className="showPedia-actor-character">{props.actor.character}</span>
    </div>
  )
}

export default Actor
