import React, {useState} from 'react';

const WhitePawn = ({initialPosition, handleMovement, index}:{initialPosition:number, handleMovement:Function, index:number}) => {
    const [position, setPosition] = useState(initialPosition);
    const [moved, setMoved] = useState(false);
    const square = `square${position}`;
    const pieceIndex = index

    return(
        <div id="WhitePawn" className = {`piece wp ${square}`} onClick={() => handleMovement(position, moved, index, "white")}/>
    )
}

export default WhitePawn