import React, {useState} from 'react';

const BlackQueen = ({initialPosition}:{initialPosition:number}) => {
    const [position, setPosition] = useState(initialPosition)
    const square = `square${position}`
    return(
        <div id="BlackQueen" className = {`piece bq ${square}`}/>
    )
}

export default BlackQueen