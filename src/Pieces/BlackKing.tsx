import React, {useState} from 'react';

const BlackKing = ({initialPosition}:{initialPosition:number}) => {
    const [position, setPosition] = useState(initialPosition)
    const square = `square${position}`
    return(
        <div id="BlackKing" className = {`piece bk ${square}`}/>
    )
}

export default BlackKing