import React, { useContext, useState } from 'react';
import './hotel.css'
import Navbar from '../../component/navbar/Navbar'
import Header from '../../component/header/Header'
import MailList from '../../component/mailList/MailList';
import useFetch from '../../hooks/useFetch'
import Footer from '../../component/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';
import Reserve from '../../component/reserve/Reserve';

const Hotel = () => {
  const [slide, setSlide] = useState(0);
  const location = useLocation();
  const id = location.pathname.split("/")[2]
  const [open, setOpen] = useState(false);
  const { data, loading, error } = useFetch(`/hotels/${id}`)
  const { dates, options } = useContext(SearchContext)
  const { user } = useContext(AuthContext)
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

  const dayDifference = (date1, date2) => {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = (dayDifference(dates[0]?.endDate, dates[0]?.startDate))

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

  const handleClick = () => {
    console.log('user',user)
    if(user) {
      // console.log('user', user) 
      setOpenModal(true);
    } else {
      console.log('Login Page')
      navigate("/login")
    }
  }

  return (
    <div>
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
              <h1>Perfect for a {days}-night stay!</h1>
              <span> Located in the real heart of Broski. This property has an excellent location score of 9.8!</span>
              <h2>
                <b>${days * data.cheapestPrice * options.room}</b> ({days}{" "}
                nights)
              </h2>
              <button onClick={handleClick}>Reserve or Book Now!</button>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      </div>)}
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id} /> }
    </div>
  )
}

export default Hotel
