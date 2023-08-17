import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../images/coaching_hero.jpg'

export default function () {
  return (
    <section className="hero hero-coaching top-4" style={{backgroundImage: `url(${heroImg})`}}>
        {/* <div className="hero-left sub-hero-dark"> */}
        <div className="hero-left">
            <h1>Why Habitactic?</h1>
        </div>
        <div className="hero-blur"></div>
    </section>
  );
}