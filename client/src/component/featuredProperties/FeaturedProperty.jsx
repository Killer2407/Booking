// import useFetch from "../../hooks/useFetch"
// import "./FeaturedProperty"

// const FeaturedProperty = () => {
//     const { data, loading, error } = useFetch("/")

//     return (
//         <div className="fProperty">
//             {loading ? ("loading"
//             ) : (
//                 <>
//                     {data.map((item) => {
//                         <div className="fPropertyItem" key={item._id}>
//                             <img
//                                 src={item.photos[0]}
//                                 alt=""
//                                 className="fPropertyImg" />
//                             <span className='fPropertyName'>{item.name}</span>
//                             <span className="fPropertyCity">{item.city}</span>
//                             <span className="fPropertyPrice">Starting from ${item.cheapestPrice}</span>
//                             {item.rating && <div className="fPropertyRating">
//                                 <button> {item.rating}</button>
//                                 <span>Excellent</span>
//                             </div>}
//                         </div>
//                     })}
//                 </>
//             )}
//         </div>
//     )

// }

// export default FeaturedProperty

import React from 'react'
import './FeaturedProperty.css'

function FeaturedProperty() {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="" className="featuredImg" />
                <span className="featuredName">Radisson Hotel </span>
                <span className="featuredCity">Las Vegas</span>
                <span className="featuredPrice">Starting from $120</span>
                <div className='featuredRating'>
                    <button>9.8</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="featuredItem">
            <img src = "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="" className="featuredImg" />
                <span className="featuredName">Radisson Hotel </span>
                <span className="featuredCity">Las Vegas</span>
                <span className="featuredPrice">Starting from $120</span>
                <div className='featuredRating'>
                    <button>9.8</button>
                    <span>Excellent</span>
                </div>
        </div>
        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="" className="featuredImg" />
                <span className="featuredName">Radisson Hotel </span>
                <span className="featuredCity">Las Vegas</span>
                <span className="featuredPrice">Starting from $120</span>
                <div className='featuredRating'>
                    <button>9.8</button>
                    <span>Excellent</span>
                </div>
        </div>
        <div className="featuredItem">
            <img src = "https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
                alt="" className="featuredImg" />
                <span className="featuredName">Radisson Hotel </span>
                <span className="featuredCity">Las Vegas</span>
                <span className="featuredPrice">Starting from $120</span>
                <div className='featuredRating'>
                    <button>9.8</button>
                    <span>Excellent</span>
                </div>
        </div>
        <div className="featuredItem">
            <img src ="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="" className="featuredImg" />
                <span className="featuredName">Radisson Hotel </span>
                <span className="featuredCity">Las Vegas</span>
                <span className="featuredPrice">Starting from $120</span>
                <div className='featuredRating'>
                    <button>9.8</button>
                    <span>Excellent</span>
                </div>
        </div>
        </div>
    )
}

export default FeaturedProperty
