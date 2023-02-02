import useFetch from "../../hooks/useFetch"
import "./FeaturedProperty"


const FeaturedProperty = () => {
    const { data, loading, error } = useFetch("/")

    return (
        <div className="fProperty">
            {loading ? ("loading"
            ) : (
                <>
                    {
                        data.map((item) => {
                            <div className="fPropertyItem" key={item._id}>
                                <img
                                    src={item.photos[0]}
                                    alt=""
                                    className="fPropertyImg" />
                                <span className='fPropertyName'>{item.name}</span>
                                <span className="fPropertyCity">{item.city}</span>
                                <span className="fPropertyPrice">Starting from ${item.cheapestPrice}</span>
                                {item.rating && <div className="fPropertyRating">
                                    <button> {item.rating}</button>
                                    <span>Excellent</span>
                                </div>}
                            </div>
                        })
                    }
                </>
            )}
        </div>
    )

}

export default FeaturedProperty