import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../images/coaching_hero.jpg'

export default function () {
  return (
    <section className="hero-room" style={{backgroundImage: `url(${heroImg})`}}>
        <div className="hero-center">
            <h1>Coaching Details</h1>
            <div className="underline-1"><span></span></div>
            <Link to='/' className='btn btn-primary'>Book a free consultation</Link>
        </div>
    </section>
  );
}