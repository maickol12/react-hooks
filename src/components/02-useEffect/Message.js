import React, { useEffect, useState } from 'react';


export const Message = () => {

    const [coords, setCoords] = useState({x:0,y:0});
    const {x,y} = coords;

    const mouseMove = (e) =>{
        const coords = { x:e.screenX , y:e.screenY };
        setCoords(coords);
    }

    useEffect(() => {
        window.addEventListener('mousemove',mouseMove);
        return () => {
            window.removeEventListener('mousemove',mouseMove);
        }
    },[]);

    return(
        <div>
            <h1>Hola Mundo</h1>
            {x} ** {y}
        </div>
    )
}