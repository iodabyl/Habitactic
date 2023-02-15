import React, { useState } from 'react'
import { useRoomContext } from '../context';

export default function RoomForm() {
  const {type,guests,price,minSize,maxSize,breakfast,pets,setType,setGuests,setPrice,setMinSize,setMaxSize,setBreakfast,setPets,handleFilter} = useRoomContext();
  const handleNewType = (e) => {
      setType(e.target.value)
  }
  const handleNewSize = (e) => {
    setPrice(e.target.value)
    handleFilter()
}
    return (
    <section className="section">
        <section className="section-center-wide">
            <div className="section-title">
                <h2>Search Rooms</h2>
                <div className="underline-2"><span></span></div>
            </div>
            <form className='filter-form'>
                <div className="form-group">
                    <label htmlFor="type">Room Type</label>
                    <div className="inputs">
                        <select name="type" id="type" defaultValue={type} onChange={(e) => handleNewType}>
                            <option value="all">all</option>
                            <option value="single">single</option>
                            <option value="double">double</option>
                            <option value="triple">triple</option>
                            <option value="family">family</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="guests">Guests</label>
                    <div className="inputs">
                        <select name="guests" id="guests" defaultValue={guests} onChange={(e) => setGuests(e.target.value)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Room Price ${price}</label>
                    <div className="inputs">
                        <input type="range" name='price' id='price' min={0} max={600} value={price} onChange={(e)=> handleNewSize(e)}/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="size">Room Size</label>
                    <div className="inputs">
                        <input type="text" name='min-size' id='min-size' value={minSize} onChange={(e)=> setMinSize(e.target.value)}/>
                        <input type="text" name='max-size' id='max-size' value={maxSize} onChange={(e)=> setMaxSize(e.target.value)}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="inputs">
                        <div className="option">
                            <input type="checkbox" name='breakfast' id='breakfast' checked={breakfast} onChange={() => setBreakfast(!breakfast)}/>
                            <label htmlFor="breakfast">breakfast</label>
                        </div>
                        <div className="option">
                            <input type="checkbox" name='pets' id='pets' checked={pets} onChange={() => setPets(!pets)}/>
                            <label htmlFor="pets">pets</label>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    </section>
  )
}
