import React from 'react'
import { Link } from 'react-router-dom'
import './searchItem.css'

const SearchItem = ({item}) => {
  
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="searchImage" />
      <div className="searchDesc">
        <h1 className="searchTitle">{item.name}</h1>
        <span className="searchDistance">{item.distance}m from center</span>
        <span className="searchTaxi">Free Airport Taxi</span>
        <span className="searchSubtitle">Studio Apartment with Air Conditioning</span>
        <span className="searchFeatures">{item.desc}</span>
        <span className="searchCancel">Free cancellation</span>
        <span className="searchCancelSubtitle">You can cancel, so lock in this great price today!</span>
      </div>
      <div className="searchDetails">
      {item.rating && <div className="searchRating">
        <span> Excellent </span>
        <button> {item.rating} </button>
      </div>}
        <div className="searchDetailsText">
          <span className='searchPrice'> ${item.cheapestPrice} </span>
          <span className='searchTax'> Includes taxes and fees </span>
          <Link to={`/hotels/${item._id}`}>
         
          <button className='searchCheckbutton'>See Availability</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SearchItem

