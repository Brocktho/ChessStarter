import React, {useState} from 'react';

const WhiteBishop = ({initialPosition}:{initialPosition:number}) => {
    const [position, setPosition] = useState(initialPosition)
    const square = `square${position}`
    return(
        <div id="WhiteBishop" className = {`piece wb ${square}`}/>
    )
}

export default WhiteBishop