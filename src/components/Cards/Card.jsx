import React, {useState} from 'react'

import './Card.css'

const Card = ({name, location, date, property, price, image, favourites, setFavourites, item}) => {
    const handleFavourite=()=>{
        if(!favourites.includes(item)){
            setFavourites([...favourites, item])
        }
    }
    return (
        <div className='card'>
            <img src={image}/>
            <div>
                <div className='price-cont'>
                    <h2 className='price'>{price}<span className='month'>/month</span></h2>
                    <button className='favourite' onClick={handleFavourite}>Add to Favourite</button>
                </div>
                <div className='Details-container'>
                    <h3>{name}</h3>
                </div>
                <div className='category-container'>
                    <p>{location}</p>
                    <p>{date}</p>
                    <p>{property}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
