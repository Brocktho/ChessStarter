import React, {useState} from 'react';

const BlackPawn = ({initialPosition}:{initialPosition:number}) => {
    const [position, setPosition] = useState(initialPosition)
    const square = `square${position}`
    return(
        <div id="BlackPawn" className = {`piece bp ${square}`}/>
    )
}

export default BlackPawn