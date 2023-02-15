import React from 'react';
import useMediaQuery from "./useMediaQuery";
import WidescreenImgs from "./WidescreenImgs";
import SmallscreenImgs from "./SmallscreenImgs";

export default function RoomImages({fields}) {
    let roomImgs = [];
    roomImgs.push(fields.images[1].fields.file.url);
    roomImgs.push(fields.images[2].fields.file.url);
    roomImgs.push(fields.images[3].fields.file.url);
    const matches = useMediaQuery("(min-width: 780px)");

    return (
        <section className="section">
            <section className="section-center-wide">
                {matches ? <WidescreenImgs images={roomImgs}/> : <SmallscreenImgs images={roomImgs}/>}
            </section>
        </section>
    )
}
