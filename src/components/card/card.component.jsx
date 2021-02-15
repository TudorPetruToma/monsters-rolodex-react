import React from 'react'
import './card.style.css'

export const Card = props => (
    <div className='card-container'>
    <img alt='monster' src={`https://robohash.org/${props.monsterName.id}?set=set2$size=180x180`}></img>
        <h1>{props.monsterName.name}</h1>
        <h2>{props.monsterName.username}</h2>
    </div>)
