import React from 'react'
import './card-list.style.css'
import { Card } from '../card/card.component'

export const CardList = props => (

<div className='card-list'>

{props.monsters.map(monsterName => ( 

<Card key={monsterName.id} monsterName={monsterName}/> 

))}

</div>
)

