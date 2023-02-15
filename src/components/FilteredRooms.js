import React from 'react';
import { useRoomContext } from '../context';
import RoomIcon from './RoomIcon';

export default function FilteredRooms() {
    const {filteredRooms} = useRoomContext();
  return (
    <section className="section">
        <div className="section-center">
            <div className="our-rooms-body">
                {filteredRooms.map((room) => {
                    const {sys, fields} = room;
                    return (
                    <div className="filter-room-icon" key={sys.id}>
                        <RoomIcon {...fields}/>
                    </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}
