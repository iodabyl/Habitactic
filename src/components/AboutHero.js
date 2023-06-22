import React from 'react';
import heroImg from '../images/coaching_hero.jpg'
import isaac from '../images/Isaac.jpg'

export default function () {
  return (
    <section className="hero-sub hero-about" style={{backgroundImage: `url(${isaac})`}}>
        <div className="hero-left">
            <h1>Hi, I'm Isaac.</h1>
            <h1>Welcome to Habitactic</h1>
        </div>
        <div className="hero-blur"></div>
    </section>
  );
}