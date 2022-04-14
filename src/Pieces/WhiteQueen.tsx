import React, {useState} from 'react';

const WhiteQueen = ({initialPosition}:{initialPosition:number}) => {
    const [position, setPosition] = useState(initialPosition)
    const square = `square${position}`
    return(
        <div id="WhiteQueen" className = {`piece wq ${square}`}/>
    )
}

export default WhiteQueen