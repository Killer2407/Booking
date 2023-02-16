import React, { useState } from 'react';
import './hotel.css'
import Navbar from '../../component/navbar/Navbar'
import Header from '../../component/header/Header'
import MailList from '../../component/mailList/MailList';
import Footer from '../../component/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Hotel = () => {
  const [slide, setSlide] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

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
      <div className="hotelContainer">
        {open && <div className="slide">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")} />
          <div className="slideWrapper">
            <img src={photos[slide].src} alt="" className="slideImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")} />
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Tower</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>70 Greybarn Long Island</span>
            </div>
            <span className='hotelDistance'>
              Excellent location - 500m from center
            </span>
            <span className='hotelPricing'>
              Book a stay over $115 at this property and get a free airport taxi!
            </span>
            <div className="hotelImage">
              {photos.map((photo, key) => {
                return (
                  <div className="hotelImageWrapper" key={key}>
                    <img onClick={() => handleOpen(key)} src={photo.src} alt=" " className="hotelImg" />
                  </div>)
              })}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetText">
                <h1 className='hotelTitle'>Stay in the heart</h1>
                <p className='hotelDes'>
                  Located a 5 minute walk from St. Florian's Gate. GreyBarn apartments
                  has accomodations with air conditioning and free Wifi.
                </p>
              </div>
              <div className="hotelDetPrice">
                <h1>Perfect for a 9-night stay!</h1>
                <span> Located in the real heart of Broski. This property has an excellent location score of 9.8!</span>
                <h2>
                  <b>$945</b> (9 nights)
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
            </div>
          <MailList />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Hotel
