import React, { useState } from 'react'
import './list.css'
import Navbar from '../../component/navbar/Navbar'
import Header from '../../component/header/Header'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../component/searchItem/SearchItem'

const List = () => {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [dates, setDates] = useState(location.state.dates)
  const [options, setOptions] = useState(location.state.options)
  const [openDate, setOpenDate] = useState(false);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="listSearchItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="listSearchItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (<DateRange
                onChange={(item) => setDates([item.selection])}
                ranges={dates}
                minDate={new Date()} />)}
            </div>
            <div className="listSearchItem">
              <label>Options</label>
              <div className="listOptions">
              <div className="listInput">
                <span className="listSearchText">Min Price/ <small>per night</small></span>
                <input type ="number" min={0} className='listSearchOption' />
              </div>
              <div className="listInput">
                <span className="listSearchText">Adult</span>
                <input type ="number" min={1} placeholder={options.adult} className='listSearchOption' />
              </div>
              <div className="listInput">
                <span className="listSearchText">Children</span>
                <input type ="number" min={0} placeholder={options.children} className='listSearchOption' />
              </div>
              <div className="listInput">
                <span className="listSearchText">Room</span>
                <input type ="number" min={1} placeholder={options.room} className='listSearchOption' />
              </div>
            </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default List