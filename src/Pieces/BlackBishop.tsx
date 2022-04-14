import React, {useState} from 'react';

const BlackBishop = ({initialPosition}:{initialPosition:number}) => {
    const [position, setPosition] = useState(initialPosition)
    const square = `square${position}`
    return(
        <div id="BlackBishop" className = {`piece bb ${square}`}/>
    )
}

export default BlackBishop