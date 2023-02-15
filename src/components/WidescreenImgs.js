import React from 'react';

export default function WidescreenImgs({images}) {
    const rooms = images;
  return (
    <section className="widescreen-rooms">
    {rooms.map((room,index) => {
        return (
        <div className="room-img-container" key={index}>
            <img src={room} alt="room"/>
        </div>
        )
    })}
</section>
  );
}
