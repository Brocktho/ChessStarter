import React, {useState} from 'react';

const BlackHorse = ({initialPosition}:{initialPosition:number}) => {
    const [position, setPosition] = useState(initialPosition)
    const square = `square${position}`
    return(
        <div id="BlackHorse" className = {`piece bh ${square}`}/>
    )
}

export default BlackHorse