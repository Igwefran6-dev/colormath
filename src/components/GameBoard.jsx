import { useState } from "react";
import Block from "./ColorBlock.jsx";

function GameBoard(props) {
    return (
        <div className=" h-[100dvw] w-[100dvw] grid grid-cols-2 grid-rows-2 gap-1 pl-1 pr-1">
            <Block
                color={props.newColors[0]}
                calc={props.newCalcsArr[0].ques}
                checkCalc={props.checkCalc}
                condition={props.newCalcsArr[0]}
            />
            <Block
                color={props.newColors[1]}
                calc={props.newCalcsArr[1].ques}
                checkCalc={props.checkCalc}
                condition={props.newCalcsArr[1]}
            />
            <Block
                color={props.newColors[2]}
                calc={props.newCalcsArr[2].ques}
                checkCalc={props.checkCalc}
                condition={props.newCalcsArr[2]}
            />
            <Block
                color={props.newColors[3]}
                calc={props.newCalcsArr[3].ques}
                checkCalc={props.checkCalc}
                condition={props.newCalcsArr[3]}
            />
        </div>
    );
}

export default GameBoard;
