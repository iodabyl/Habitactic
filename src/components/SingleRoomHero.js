import React from 'react';
import { Link } from 'react-router-dom';

export default function ({sys, fields}) {
  const heroImg = fields.images[0].fields.file.url;
  const name = fields.name;
  return (
    <section className="hero-room" style={{backgroundImage: `url(${heroImg})`}}>
        <div className="hero-center">
            <h1>{name}</h1>
            <div className="underline-1"><span></span></div>
            <Link to='/rooms' className='btn btn-primary'>Back to Rooms</Link>
        </div>
    </section>
  );
}
