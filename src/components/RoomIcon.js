import React from 'react';
import { Link } from 'react-router-dom';

export default function RoomIcon({name, price, images, slug}) {
    const img = images[0].fields.file.url;
  return (
      <article className="room-icon">
          <div className="icon-img-container">
            <img src={img} alt="room" />
            <div className='icon-price'>
                <h4>${price}</h4>
                <p>per night</p>
            </div>
            <div className="icon-features">
                {/* <Link to='/about' className='btn btn-primary'>Features</Link> */}
                <Link to={`/rooms/${slug}`} className='btn btn-primary'>Features</Link>
            </div>
          </div>
          <div className="icon-footer">
            <h4>{name}</h4>
          </div>
      </article>
  );
}
