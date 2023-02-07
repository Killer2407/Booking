
// import Featured from '../../component/featured/Featured';
// import FeaturedProperty from '../../component/featuredProperties/FeaturedProperty';
import Header from '../../component/header/Header';
import Navbar from '../../component/navbar/Navbar';
import './home.css'

const Home = () => {
    return (
        <div>
            <div className="homeContainer">
                <div>
                    <Navbar />
                    <Header />    
                </div>
                {/* <Featured /> */}
                {/* <h1 className="homeTitle"></h1>
                <h1 className="homeTitle"></h1> */}
                {/* <FeaturedProperty /> */}
            </div>
        </div>
    )
}

export default Home;