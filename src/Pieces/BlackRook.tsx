import React, {useState} from 'react';

const BlackRook = ({initialPosition}:{initialPosition:number}) => {
    const [position, setPosition] = useState(initialPosition)
    const square = `square${position}`
    return(
        <div id="BlackRook" className = {`piece br ${square}`}/>
    )
}

export default BlackRook