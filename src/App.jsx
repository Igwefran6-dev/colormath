import Header from "./components/Header";
import Fill from "./components/Fill";
import GameBoard from "./components/GameBoard";
import ColorPalateView from "./components/ColorPalateView"; // Fixed import statement
import PowerUps from "./components/PowerUps";
import Footer from "./components/Footer";
import Data from "./components/Data";
import Win from "./components/Win";
import GameOver from "./components/GameOver";
import { useState, useEffect } from "react";

function App() {
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
    let [fillWidth, setFillWidth] = useState(25);

    function checkCalc(data) {
        let newColor = shuffleArr(colors);
        setNewColors(newColor);

        if (data) {
            setFillWidth(previousFillWith => previousFillWith + 75);
        } else {
            setFillWidth(previousFillWith => previousFillWith - 25);
        }
    }

    
        useEffect(() => {
            if (fillWidth >= 100) {
                alert("you win");
                setFillWidth(100);
            } else if (fillWidth <= 0) {
                alert("you loss");
                setFillWidth(0);
            }
        }, [fillWidth]);
    

    

    return (
        <div className="h-[100vh] flex flex-col bg-neutral-50">
            <Header />
            <Fill fill={fillWidth} />
            <GameBoard
                newColors={newColors}
                newCalcsArr={newCalcsArr}
                checkCalc={checkCalc}
            />
            <ColorPalateView />

            <GameOver />
            <Win />

            <PowerUps />
            <Footer />
        </div>
    );
}

export default App;
