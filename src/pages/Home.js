import React from 'react';
import FeaturedRooms from '../components/FeaturedRooms.js';
import Hero from "../components/Hero.js"
import Services from '../components/Services.js';

export default function Home() {
  return (
    <>
        <Hero />
        <Services />
        <FeaturedRooms />
    </>
  );
}
