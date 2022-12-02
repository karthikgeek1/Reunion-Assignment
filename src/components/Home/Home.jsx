import React from 'react'
import { useState, useEffect } from 'react'
import Card from '../Cards/Card'
import { data } from '../Data'
import Header from '../Header/Header'

import './Home.css'

const Home = ({favourites, setFavourites}) => {
    const [filterData, setFilterData] = useState(data)
    const [searchVal, setSearchVal] = useState('')
    const [location, setLocation] = useState('')
    const [date, setDate] = useState('')
    const [price, setPrice] = useState('')
    const [property, setProperty] = useState('')
    const handleSearch = () => {
        let filData = data.filter((item) => {
            if(item.name.toLowerCase().includes(searchVal.toLowerCase())){
                return item
            }
        })
        setFilterData(filData)
    }
    useEffect(() => {
        let filData = data.filter((item) => {
            if(item.name.toLowerCase().includes(searchVal.toLowerCase())){
                return item
            }
        })
        setFilterData(filData)
    }, [searchVal])

    useEffect(()=>{
        handleFilter()
    },[location, property, price, date])

    const handleFilter=()=>{
        let filData = data.filter((item)=>{
            console.log(item.date,date)
            if((item.location.toLowerCase().includes(location.toLocaleLowerCase())|| location==="") && (item.propertyType.toLowerCase().includes(property.toLowerCase())||property==="") && (item.priceRange.includes(price) || price==="") && (item.date>date || date=="")){
                // console.log(location)
                return item
            }
        })
        setFilterData(filData)
    }

    return (
        <>
            <Header />
            <h1>Search properties for Rent</h1>
            <div className='search container'>
                <input type='text' placeholder='search' value={searchVal} onChange={(e) => setSearchVal(e.target.value)} className='search-bar' />&nbsp;
                <button className='search-btn' onClick={() => handleSearch()}>search</button>
            </div>
            <div className='filter-wrap'>
                <div className='filter-container'>
                    <input type='text' placeholder='Location...' className='Location' value={location} onChange={(e)=>setLocation(e.target.value)}/>
                    <select name="Manage Property" style={{ border: '0px', padding: '10px', borderRadius: '5px', backgroundColor: 'rgb(240, 224, 255)' }} value={price} onChange={(e)=>setPrice(e.target.value)}>
                        <option value="heading">price</option>
                        <option value="500-1000">500-1000</option>
                        <option value="1500-3000">1500-3000</option>
                        <option value="3000-6000">3000-6000</option>
                    </select>
                    <select name="Manage Property" style={{ border: '0px', padding: '10px', borderRadius: '5px', backgroundColor: 'rgb(240, 224, 255)' }} value={property} onChange={(e)=>setProperty(e.target.value)}>
                        <option value="property-type">property-type</option>
                        <option value="House">House</option>
                        <option value="Villa">Villa</option>
                        <option value="Bunglow">Bunglow</option>
                    </select>
                    <input type='date' className='datepicker' value={date} onChange={(e)=>setDate(e.target.value)}/>
                </div>
            </div>
            <div className='card-containers'>
                {filterData.map((item, index) => (
                    <div key={index} className='sub-card-cont'>
                        <Card name={item.name} location={item.location} date={item.date} property={item.propertyType} price={item.price} image={item.image} favourites={favourites} setFavourites={setFavourites} item={item}/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home