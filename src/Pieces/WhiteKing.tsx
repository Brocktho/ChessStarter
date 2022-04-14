import React, {useState} from 'react';

const WhiteKing = ({initialPosition}:{initialPosition:number}) => {
    const [position, setPosition] = useState(initialPosition)
    const square = `square${position}`
    return(
        <div id="WhiteKing" className = {`piece wk ${square}`}/>
    )
}

export default WhiteKing