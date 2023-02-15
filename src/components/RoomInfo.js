import React from 'react';

export default function RoomInfo({sys,fields}) {
  const {description, price, size, capacity, pets, breakfast, extras} = fields;
  return (
    <section className="section">
      <section className="section-center-wide">
        <section className="room-info-section">
          <div className="room-info-div details">
            <h3>Details</h3>
            <p>{description}</p>
          </div>
          <div className="room-info-div info">
            <h3>Info</h3>
            <p>Price: ${price}</p>
            <p>Size: {size} SQFT</p>
            {capacity===1 ? <p>Max Capacity: {capacity} Person</p> : <p>Max Capacity: {capacity} People</p>}
            {pets ? <p>Pets Allowed</p> : <p>Pets Not Allowed</p>}
            {breakfast ? <p>Free Breakfast Included</p> : <p> No Free Breakfast</p>}
          </div>
          <div className="room-info-div extras">
            <h4>Extras</h4>
            <ul className='extras-list'>
              {extras.map((extra,index) => {
                return <li key={index}><p>- {extra}</p></li>
              })}
            </ul>
          </div>
        </section>
      </section>
    </section>
  )
}
