import React, { useContext, useState } from 'react';
import './hotel.css'
import Navbar from '../../component/navbar/Navbar'
import Header from '../../component/header/Header'
import MailList from '../../component/mailList/MailList';
import useFetch from '../../hooks/useFetch'
import Footer from '../../component/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';


const Hotel = () => {
  const [slide, setSlide] = useState(0);
  const location = useLocation();
  const id = location.pathname.split("/")[2]
  const [open, setOpen] = useState(false);
  const { data, loading, error } = useFetch(`/hotels/find/${id}`)
  const {dates} = useContext(SearchContext)
  console.log(dates)
  const handleOpen = (key) => {
    setSlide(key);
    setOpen(true);
  }

  const handleMove = (direction) => {
    let newSlideIndex;

    if (direction === "l") {
      newSlideIndex = slide === 0 ? 5 : slide - 1;
    } else {
      newSlideIndex = slide === 5 ? 0 : slide + 1;
    }

    setSlide(newSlideIndex)
  }

  return (
    <>
      <Navbar />
      <Header type="list" />
      {loading ? ("Loading") : (<div className="hotelContainer">
        {open && <div className="slide">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")} />
          <div className="slideWrapper">
            <img src={data.photos[slide]} alt="" className="slideImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")} />
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">{data.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{data.address}</span>
          </div>
          <span className='hotelDistance'>
            Excellent location - {data.distance}m from center
          </span>
          <span className='hotelPricing'>
            Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi!
          </span>
          <div className="hotelImage">
            {data.photos?.map((photo, key) => {
              return (
                <div className="hotelImageWrapper" key={key}>
                  <img onClick={() => handleOpen(key)} src={photo} alt=" " className="hotelImg" />
                </div>)
            })}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetText">
              <h1 className='hotelTitle'>{data.title}</h1>
              <p className='hotelDes'>
                {data.desc}
              </p>
            </div>
            <div className="hotelDetPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span> Located in the real heart of Broski. This property has an excellent location score of 9.8!</span>
              <h2>
                <b>$954</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      </div>)}
    </>
  )
}

export default Hotel
