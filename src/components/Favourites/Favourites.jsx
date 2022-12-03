import React from 'react'
import Header from '../Header/Header'
import Card from '../Cards/Card'

import './Favourites.css'

const Favourites = ({favourites, setFavourites}) => {
  return (
    <div>
      <Header/>
      <div className='flex2'>
      <div className='card-containers'>
      {
        favourites.map((item, index)=>(
            <div className='sub-card-cont'>
                <Card key={index} name={item.name} location={item.location} date={item.date} property={item.propertyType} price={item.price} image={item.image} favourites={favourites} setFavourites={setFavourites} item={item}/>
            </div>
        ))
      }
      </div>
      </div>
    </div>
  )
}

export default Favourites
