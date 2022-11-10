import React from 'react'
import ti4img from '../../Stockimages/ti4stock.jpg'
import './Archivecard.css'

const Archivecard = ({archive}) => {
  
  return (
    <div className='archive__card'>
        <img src={ti4img} className='archive__img'/>
        <h2 className='arvhive__data'>Game Title: {archive.title} </h2>
        <h2 className='arvhive__data'>Game Length: {archive.length} </h2>
        <h2 className='arvhive__data'>Amount Of Players: {archive.amount}</h2>
        <h2 className='arvhive__data'>Races: {archive.races}</h2>
        <h2 className='arvhive__data'>Victor: {archive.victor} </h2>
        <div className='arvhive__story'>
            <span>{archive.story}</span>
        </div>
    </div>
  )
}

export default Archivecard