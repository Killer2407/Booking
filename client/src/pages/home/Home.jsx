
import Featured from '../../component/featured/Featured';
import FeaturedProperty from '../../component/featuredProperties/FeaturedProperty';
import Header from '../../component/header/Header';
import Navbar from '../../component/navbar/Navbar';
import PropertyList from '../../component/propertyList/PropertyList';
import MailList from '../../component/mailList/MailList';
import './home.css'
import Footer from '../../component/footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Browse by property type</h1>
                <PropertyList />
                <h1 className="homeTitle">Homes guests love</h1>
                <FeaturedProperty />
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Home;
