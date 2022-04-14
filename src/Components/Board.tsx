import React, {useEffect, useState, useRef} from 'react';
import WhiteRook from '../Pieces/WhiteRook';
import WhiteHorse from '../Pieces/WhiteHorse';
import WhiteBishop from '../Pieces/WhiteBishop';
import WhiteQueen from '../Pieces/WhiteQueen';
import WhiteKing from '../Pieces/WhiteKing';
import WhitePawn from '../Pieces/WhitePawn';
import BlackRook from '../Pieces/BlackRook';
import BlackHorse from '../Pieces/BlackHorse';
import BlackBishop from '../Pieces/BlackBishop';
import BlackQueen from '../Pieces/BlackQueen';
import BlackKing from '../Pieces/BlackKing';
import BlackPawn from '../Pieces/BlackPawn';
import MoveSpot from '../Pieces/MoveSpot';

interface Piece {
    index:number,
    piece:JSX.Element,
    position:number,
    captured:boolean
}
interface Collision{
    occupied:boolean
    capture:boolean
}

const Board = () => {
    const [BlackPiecesData, setBlackPiecesData] = useState<Piece[]>();
    const [WhitePiecesData, setWhitePiecesData] = useState<Piece[]>();
    const [MovementOptions, setMovementOptions] = useState<JSX.Element[]>();
    const boardState = useRef<number[]>([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63]);
    
    const handleMovement = (position:number, state:boolean, index:number, color:string) =>{
        if(color.toLowerCase() === "white"){
            if(index<8){
                if(position-8 in boardState){
                    setMovementOptions(undefined);
                    console.log("no valid moves");
                }else{
                    if(!state){
                        if(position-16 in boardState){
                            setMovementOptions([<MoveSpot initialPosition={position-8} key={1}/>]);
                        }
                        else{
                            setMovementOptions([<MoveSpot initialPosition={position-8} key={1}/>, <MoveSpot initialPosition={position-16} key={2}/>]);
                        }
                    }else{
                        setMovementOptions([<MoveSpot initialPosition={position-8} key={1}/>]);
                    }
                }
            }
        }
    }

    function checkCapture(position:number, color:string):Collision{
        let collisionCheck:Collision = {occupied: false, capture: false}
        if(color === "white"){
            BlackPiecesData!.forEach(piece => {
                if (position === piece.position){
                    collisionCheck = {occupied: true, capture:true}
                }
            })
            WhitePiecesData!.forEach(piece => {
                if (position === piece.position){
                    collisionCheck = {occupied: true, capture:false}
                }
            })
        }else{
            WhitePiecesData!.forEach(piece => {
                if (position === piece.position){
                    collisionCheck = {occupied:true, capture:true}
                }
            })
            BlackPiecesData!.forEach(piece => {
                if (position === piece.position){
                    collisionCheck = {occupied:true, capture:false}
                }
            })
        }
        return collisionCheck;
    }

    useEffect(() => {
        let position:number
        const pieces: number[] = Array.from(Array(16))
        const WhitePiecesSetup:Piece[] = pieces.map((item,i) => {
            position = i+48
            if(i < 8){
                return({index:i, piece:<WhitePawn initialPosition={position} key={(i+48)} handleMovement={handleMovement} index={i}/>, position:i+48, captured:false})
            }if(i === 8 || i === 15){
                return({index:i, piece:<WhiteRook initialPosition={position} key={(i+48)}/>, position:i+48, captured:false})
            }if(i === 9 || i === 14){
                return({index:i, piece:<WhiteHorse initialPosition={position} key={(i+48)}/>, position:i+48, captured:false})
            }if(i === 10 || i === 13){
                return({index:i, piece:<WhiteBishop initialPosition={position} key={(i+48).toString()}/>, position:i+48, captured:false})
            }if(i === 11){
                return({index:i, piece:<WhiteQueen initialPosition={position} key={(i+48).toString()}/>, position:i+48, captured:false})
            }
            else{
                return({index:i, piece:<WhiteKing initialPosition={position} key={(i+48).toString()}/>, position:i+48, captured:false})
            }
        })
        const BlackPiecesSetup: Piece[] = pieces.map((item,i) => {
            position = i
            if(i >= 8){
                return({index: i, piece:<BlackPawn initialPosition={position} key={i.toString()}/>, position:i, captured:false})
            }if(i === 0 || i ===7){
                return({index: i, piece:<BlackRook initialPosition={position} key={i.toString()}/>, position:i, captured:false})
            }if(i === 1 || i === 6){
                return({index: i, piece:<BlackHorse initialPosition={position} key={i.toString()}/>, position:i, captured:false})
            }if(i === 2 || i === 5){
                return({index: i, piece:<BlackBishop initialPosition={position} key={i.toString()}/>, position:i, captured:false})
            }if(i === 3){
                return({index: i, piece:<BlackQueen initialPosition={position} key={i.toString()}/>, position:i, captured:false})
            }
            else{
            return({index: i, piece:<BlackKing initialPosition={position} key={i.toString()}/>, position:i, captured:false})
            }
        })
        setWhitePiecesData(WhitePiecesSetup)
        setBlackPiecesData(BlackPiecesSetup)

    },[])

    return(
        <div className="board">
            {BlackPiecesData?.map(pieces => pieces.piece)}
            {WhitePiecesData?.map(pieces => pieces.piece)}
            {MovementOptions}
        </div>
    )
}

export default Board