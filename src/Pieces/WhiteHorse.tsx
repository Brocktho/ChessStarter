import React, {useState} from 'react';

const WhiteHorse = ({initialPosition}:{initialPosition:number}) => {
    const [position, setPosition] = useState(initialPosition)
    const square = `square${position}`
    return(
        <div id="WhiteHorse" className = {`piece wh ${square}`}/>
    )
}

export default WhiteHorse