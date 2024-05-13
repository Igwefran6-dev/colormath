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

    if (localStorage.getItem("level") === null) {
        localStorage.setItem("level", "1");
    }
    let [currentLevel, setCurrentLevel] = useState(
        localStorage.getItem("level")
    );
    function nextLevel() {
        let newNextLevel = JSON.parse(localStorage.getItem("level")) + 1;
        localStorage.setItem("level", JSON.stringify(newNextLevel));
        setCurrentLevel(localStorage.getItem("level"));
        setIsFilled(false);
        setIsTimeout(false);
        setIsFillEmpty(false);
        setFillWidth(25);
    }
    function previousLevel() {
        let newPreviousLevel = JSON.parse(localStorage.getItem("level")) - 1;
        localStorage.setItem("level", JSON.stringify(newPreviousLevel));
        setCurrentLevel(localStorage.getItem("level"));
        setIsFilled(false);
        setIsTimeout(false);
        setIsFillEmpty(false);
        setFillWidth(25);
    }
    function restart() {
        setCurrentLevel(previousLevel => previousLevel);
        setIsFilled(false);
        setIsTimeout(false);
        setIsFillEmpty(false);
        setFillWidth(25);
        setTime(75);
    }

    let level = Data["level" + currentLevel];

    function randNum(range) {
        return Math.floor(Math.random() * range);
    }
    function calc() {
        let rand1 = randNum(level.range);
        let rand2 = randNum(level.range);
        let total = rand1 + rand2;
        return `${rand1} + ${rand2} = ${total}`;
    }

    function fakeCalc() {
        let rand1 = randNum(level.range);
        let rand2 = randNum(level.range);
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
            setFillWidth(100);
            setIsFilled(true);
        } else if (fillWidth <= 0) {
            setFillWidth(0);
            setIsFillEmpty(true);
        }
    }, [fillWidth]);

    const [isTimeout, setIsTimeout] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [isFillEmpty, setIsFillEmpty] = useState(false);
    const [time, setTime] = useState(level.time);

    return (
        <div className="h-[100dvh] flex flex-col bg-neutral-50">
            <Header
                setIsTimeout={setIsTimeout}
                time={time}
                level={localStorage.getItem("level")}
            />
            <Fill fill={fillWidth} />
            <GameBoard
                newColors={newColors}
                newCalcsArr={newCalcsArr}
                checkCalc={checkCalc}
            />
            <ColorPalateView />

            <GameOver
                isTimeout={isTimeout}
                isFillEmpty={isFillEmpty}
                isFilled={isFilled}
                previousLevel={previousLevel}
                restart={restart}
            />
            <Win
                nextLevel={nextLevel}
                isFilled={isFilled}
                previousLevel={previousLevel}
                restart={restart}
            />

            <PowerUps />
            <Footer />
        </div>
    );
}

export default App;
