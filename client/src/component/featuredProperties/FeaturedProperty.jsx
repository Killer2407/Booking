import React from 'react'
import './FeaturedProperty.css'
import useFetch from "../../hooks/useFetch"

function FeaturedProperty() {
    const { data, loading, error } = useFetch("/hotels?featured=true&limit=2")
    
    return (
        <div className='featured'>
            {loading ? "Loading" : 
                <>
                {data.map((item) => {
                    return (
                        <div className="featuredItem" key={item._id}>
                        <img src={item.photos[0]}
                            alt="" className="featuredImg" />
                        <span className="featuredName">{item.name} </span>
                        <span className="featuredCity">{item.city}</span>
                        <span className="featuredPrice">Starting from ${item.cheapestPrice}</span>
                        {item.rating && <div className='featuredRating'>
                            <button>{item.rating}</button>
                            <span>Excellent</span>
                        </div>}   
                    </div>
                )})}
            </>}
        </div>
    )
}

export default FeaturedProperty
