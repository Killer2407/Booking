
import Featured from '../../component/featured/Featured';
import FeaturedProperty from '../../component/featuredProperties/FeaturedProperty';
import './home.css'

const Home = () => {
    return (
        <div>
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Browse by property type</h1>
                <h1 className="homeTitle">Home guest love</h1>
                <FeaturedProperty />
            </div>
        </div>
    )
}

export default Home;