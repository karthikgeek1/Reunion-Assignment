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
            if((item.location.toLowerCase().includes(location.toLocaleLowerCase())|| location==="") && (item.propertyType.toLowerCase().includes(property.toLowerCase())||property==="") && (item.priceRange.includes(price) || price==="") && (item.date>date || date=="")){
                return item
            }
        })
        setFilterData(filData)
    }

    const handleChange=(e)=>{
        if(e.target.name==='price'){
            setPrice(e.target.value)
        }
        else if(e.target.name==='location'){
            setLocation(e.target.value)
        }
        else if(e.target.name==='Manage Property'){
            setProperty(e.target.value)
        }
        else{
            setDate(e.target.value)
        }
    }

    return (
        <>
            <Header />
            <h1>Search properties for Rent</h1>
            <div className='search container'>
                <input type='text' placeholder='search' value={searchVal} onChange={(e) => setSearchVal(e.target.value)} className='search-bar' />&nbsp;
                <button className='search-btn' onClick={handleSearch}>search</button>
            </div>
            <div className='filter-wrap'>
                <div className='filter-container'>
                    <input type='text' placeholder='Location...' name='location' className='Location' value={location} onChange={handleChange}/>
                    <select name="price" className='dropdown-style' value={price} onChange={handleChange}>
                        <option value="heading">price</option>
                        <option value="500-1000">500-1000</option>
                        <option value="1500-3000">1500-3000</option>
                        <option value="3000-6000">3000-6000</option>
                    </select>
                    <select name="Manage Property" className='dropdown-style' value={property} onChange={handleChange}>
                        <option value="property-type">property-type</option>
                        <option value="House">House</option>
                        <option value="Villa">Villa</option>
                        <option value="Bunglow">Bunglow</option>
                    </select>
                    <input name='date' type='date' className='datepicker' value={date} onChange={handleChange}/>
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
