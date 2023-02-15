import React, { useEffect, useState } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

export default function SmallscreenImgs({images}) {
    const rooms = images;
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index<0) {
            setIndex(rooms.length-1);
        }else if (index>rooms.length-1) {
            setIndex(0);
        }
    }, [index])
    useEffect(() => {
      let slider = setInterval(() => {
          setIndex(index + 1);
      }, 5000);    
      return () => {
        clearInterval(slider);
      };
    }, [index])
    
    

    return (
        <section className="smallscreen-rooms">
            {rooms.map((room,roomIndex) => {
                let position = 'nextSlide';
                if (roomIndex === index) {
                    position = 'currentSlide';
                }else if (roomIndex === index-1 || (index === 0 && roomIndex===rooms.length-1)) {
                    position = 'prevSlide';
                }
                return (
                    <section className={`small-img-container ${position}`} key={roomIndex}>
                        <img src={room} alt="room"/>
                    </section>
                )
            })}
            <div className="room-img-container hidden-container">
                <img src={rooms[0]} alt="room" />
            </div>
            <button className='prev' onClick={() => setIndex(index-1)}>
                <FiChevronLeft />
            </button>
            <button className='next' onClick={() => setIndex(index+1)}>
                <FiChevronRight />
            </button>
        </section>
    )
}
