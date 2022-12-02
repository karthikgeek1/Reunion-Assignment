import React from 'react'
import Header from '../Header/Header'
import Card from '../Cards/Card'
const Favourites = ({favourites, setFavourites}) => {
  return (
    <div>
      <Header/>
      <div className='flex2'>
      {
        favourites.map((item, index)=>(
            <div key={index}>
                <Card name={item.name} location={item.location} date={item.date} property={item.propertyType} price={item.price} image={item.image} favourites={favourites} setFavourites={setFavourites} item={item}/>
            </div>
        ))
      }
      </div>
    </div>
  )
}

export default Favourites
