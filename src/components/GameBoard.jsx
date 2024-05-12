import { useState } from "react";
import Block from "./Color-Block.jsx";

function GameBoard(props) {
    function shuffleArr(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
    function randNum(range) {
        return Math.floor(Math.random() * range);
    }
    function calc() {
        let rand1 = randNum(14);
        let rand2 = randNum(12);
        let total = rand1 + rand2;
        return `${rand1} + ${rand2} = ${total}`;
    }

    function fakeCalc() {
        let rand1 = randNum(10);
        let rand2 = randNum(10);
        let rand3 = randNum(6);
        let total = rand1 + rand3 + rand2 + 1;
        return `${rand1} + ${rand2} = ${total}`;
    }

    let calcsArr = [
        { ques: calc(), correct: true },
        { ques: fakeCalc(), correct: false },
        { ques: fakeCalc(), correct: false },
        { ques: fakeCalc(), correct: false }
    ];

    let newCalcsArr = shuffleArr(calcsArr);

    let colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "indigo",
        "violet"
    ];

    let [newColors, setNewColors] = useState(shuffleArr(colors));
    function checkCalc(data) {
        let newColor = shuffleArr(colors);
        setNewColors(newColor);
        let fill;
        if (data) {
            fill = props.fill + 10;
        } else {
            fill = props.fill - 5;
        }
        if (props.fill >= 100) {
            props.setFill(100);
        } else if (props.fill <= 0) {
            props.setFill(0);
        } else {
            props.setFill(fill);
                            if (fill >= 100) {
                    alert("you win");
                } else if (fill <= 0) {
                    alert("you loss");
                } else {
                    return;
                }
        }
    }
    return (
        <div className=" h-[100dvw] w-[100dvw] grid grid-cols-2 grid-rows-2 gap-1 pl-1 pr-1">
            <Block
                color={newColors[0]}
                text={newCalcsArr[0].ques}
                handleClick={() => checkCalc(newCalcsArr[0].correct)}
            />
            <Block
                color={newColors[1]}
                text={newCalcsArr[1].ques}
                handleClick={() => checkCalc(newCalcsArr[1].correct)}
            />
            <Block
                color={newColors[2]}
                text={newCalcsArr[2].ques}
                handleClick={() => checkCalc(newCalcsArr[2].correct)}
            />
            <Block
                color={newColors[3]}
                text={newCalcsArr[3].ques}
                handleClick={() => checkCalc(newCalcsArr[3].correct)}
            />
        </div>
    );
}

export default GameBoard;
