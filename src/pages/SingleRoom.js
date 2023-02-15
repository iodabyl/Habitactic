import React from 'react';
import { useState } from 'react';
import { useParams} from 'react-router-dom';
import RoomImages from '../components/RoomImages';
import RoomInfo from '../components/RoomInfo';
import SingleRoomHero from '../components/SingleRoomHero';
import { useRoomContext } from '../context';

export default function SingleRoom() {
    const {slug} = useParams();
    const [loading, setLoading] = useState(true);
    const [room, setRoom] = useState([]);
    const {rooms} = useRoomContext();
    if(loading){
        const singleRoom = rooms.find((room) => room.fields.slug === slug);
        setRoom(singleRoom);
        setLoading(false);
    }
    if(room){
        return (
            <section className="single-room">
                <SingleRoomHero {...room} />
                <RoomImages {...room} />
                <RoomInfo {...room} />
            </section>
        );
    }
}
