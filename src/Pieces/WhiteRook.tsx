import React, {useState} from 'react';

const WhiteRook = ({initialPosition}:{initialPosition:number}) => {
    const [position, setPosition] = useState(initialPosition)
    const square = `square${position}`
    return(
        <div id="WhiteRook" className = {`piece wr ${square}`}/>
    )
}

export default WhiteRook