import React, {createContext, useContext, useState} from 'react';
import data from './data.js'


const RoomContext = createContext();
const RoomProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [rooms, setRooms] = useState(data);
    const [type, setType] = useState('all');
    const [guests, setGuests] = useState(1);
    const [price, setPrice] = useState(600);
    const [minSize, setMinSize] = useState(0);
    const [maxSize, setMaxSize] = useState(3000);
    const [breakfast, setBreakfast] = useState(false);
    const [pets, setPets] = useState(false);
    const [filteredRooms, setFilteredRooms] = useState(rooms);

    const handleFilter = () => {
        let filtered = rooms.filter((room => 
            (room.fields.type === type && 
                room.fields.capacity >= guests && 
                room.fields.price <= price &&
                room.fields.size <= maxSize &&
                room.fields.size >= minSize
            )));
        if(type === 'all'){
            filtered = rooms.filter((room => 
                (room.fields.capacity >= guests && 
                    room.fields.price <= price &&
                    room.fields.size <= maxSize &&
                    room.fields.size >= minSize
                )
            ));
        }
        if(breakfast===true){
            filtered = filtered.filter((room => room.fields.breakfast===true));
        }
        if(pets===true){
            filtered = filtered.filter((room => room.fields.pets===true));
        }
        setFilteredRooms(filtered);
    }
    return (
        <RoomContext.Provider value={{
            loading,
            rooms,
            type,
            guests,
            price,
            minSize,
            maxSize,
            breakfast,
            pets,
            setType,
            setGuests,
            setPrice,
            setMinSize,
            setMaxSize,
            setBreakfast,
            setPets,
            handleFilter,
            filteredRooms
        }}>
            {children}
        </RoomContext.Provider>
    );
}

export const useRoomContext = () => {
    return useContext(RoomContext);
}
export {RoomContext, RoomProvider}
