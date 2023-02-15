import React from 'react';
import { useRoomContext } from '../context';
import RoomIcon from './RoomIcon';

export default function () {
    const {rooms} = useRoomContext();
    const featuredRooms = rooms.filter((room => room.fields.featured === true));
  return (
      <section className="section">
          <div className="section-center">
            <div className="section-title">
                <h2>Featured Rooms</h2>
                <div className="underline-2"><span></span></div>
            </div>
            <div className="featured-rooms-body">
              {featuredRooms.map((room) => {
                  const {sys, fields} = room;
                  return <RoomIcon key={sys.id} {...fields}/>
              })}
          </div>
          </div>
      </section>
  );
}
