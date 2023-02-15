import React from 'react';
import FilteredRooms from '../components/FilteredRooms';
import RoomForm from '../components/RoomForm';
import RoomsHero from '../components/RoomsHero';

export default function OurRooms() {


  return (
      <section className="our-rooms">
        <RoomsHero/>
        <RoomForm />
        <FilteredRooms />
      </section>
  );
}
