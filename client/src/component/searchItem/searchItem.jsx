import React from 'react'
import './searchItem.css'

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://thumbs.dreamstime.com/b/luxury-hotel-4480742.jpg" alt="" className="searchImage" />
        <div className="searchDesc"> 
        <h1 className="searchTitle">Tower street apartment</h1>
                <span className="searchDistance">500m from center</span>
                <span className="searchTaxi">Free Airport Taxi</span>
                <span className="searchSubtitle">Studio Apartment with Air Conditioning</span>
                <span className="searchFeatures">Entire Studio * 1 bathroom * 21m 1 full bed</span>
                <span className="searchCancel">Free cancellation</span>
                <span className="searchCancelSubtitle">You can cancel, so lock in this great price today!</span>
        </div>
        <div className="searchDetails"></div>
    </div>
  )
}

export default SearchItem

