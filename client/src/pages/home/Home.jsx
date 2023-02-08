
import Featured from '../../component/featured/Featured';
import FeaturedProperty from '../../component/featuredProperties/FeaturedProperty';
// import FeaturedProperty from '../../component/featuredProperties/FeaturedProperty';
import Header from '../../component/header/Header';
import Navbar from '../../component/navbar/Navbar';
import PropertyList from '../../component/propertyList/PropertyList';
import './home.css'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
            <Featured />
            <h1 className="homeTitle">Browse by property type</h1>
            <PropertyList/>
            <FeaturedProperty />
            </div>
            {/* <Featured /> */}
            {/* 
                <h1 className="homeTitle"></h1> */}
            {/* <FeaturedProperty /> */}
        </div>
    )
}

export default Home;