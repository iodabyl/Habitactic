import React from 'react';
import heroImg from '../images/coaching_hero.jpg'
import isaac from '../images/Isaac.jpg'

export default function () {
  return (
    <section className="hero hero-about top-4" style={{backgroundImage: `url(${isaac})`}}>
        <div className="hero-left">
            <h1>Hi, I'm Isaac.</h1>
            <h3>Welcome to Habitactic</h3>
        </div>
        <div className="hero-blur"></div>
    </section>
  );
}