import React from 'react'
import ti4img from '../../Stockimages/ti4stock.jpg'
import './Archivecard.css'
const Archivecard = () => {
  return (
    <div className='arvhive__card'>
        <img src={ti4img} className='arvhive__img'/>
        <h2 className='arvhive__data'>Game Title: </h2>
        <h2 className='arvhive__data'>Game Length: </h2>
        <h2 className='arvhive__data'>Amount Of Players: </h2>
        <h2 className='arvhive__data'>Races: </h2>
        <h2 className='arvhive__data'>Victor: </h2>
        <div className='arvhive__story'>
            <span>story here</span>
        </div>
    </div>
  )
}

export default Archivecard