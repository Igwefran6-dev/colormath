import { useState } from "react";
import Block from "./ColorBlock.jsx";

function GameBoard(props) {
  let newColors = props.newColors
  let newCalcsArr = props.newCalcsArr
  let checkCalc = props.checkCalc
  
    return (
        <div className=" h-[100dvw] w-[100dvw] grid grid-cols-2 grid-rows-2 gap-1 pl-1 pr-1">
            <Block
                color={props.newColors[0]}
                text={props.newCalcsArr[0].ques}
                handleClick={() =>
                    props.checkCalc(props.newCalcsArr[0].correct)
                }
            />
            <Block
                color={props.newColors[1]}
                text={props.newCalcsArr[1].ques}
                handleClick={() =>
                    props.checkCalc(props.newCalcsArr[1].correct)
                }
            />
            <Block
                color={props.newColors[2]}
                text={props.newCalcsArr[2].ques}
                handleClick={() => props.checkCalc(props.newCalcsArr[2].correct)}
            />
            <Block
                color={props.newColors[3]}
                text={props.newCalcsArr[3].ques}
                handleClick={() => props.checkCalc(props.newCalcsArr[3].correct)}
            />
        </div>
    );
}

export default GameBoard;