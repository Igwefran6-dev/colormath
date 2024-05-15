import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Fill from "./components/Fill";
import GameBoard from "./components/GameBoard";
import ColorPalateView from "./components/ColorPalateView";
import PowerUps from "./components/PowerUps";
import Footer from "./components/Footer";
import Data from "./components/Data";
import Win from "./components/Win";
import GameOver from "./components/GameOver";

function App() {
    const [currentLevel, setCurrentLevel] = useState(
        () => localStorage.getItem("level") || "1"
    );

    const level = Data["level" + currentLevel];
    const [fillWidth, setFillWidth] = useState(25);
    const [isTimeout, setIsTimeout] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [isFillEmpty, setIsFillEmpty] = useState(false);
    const [countdown, setCountdown] = useState(level.time);
    const colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "indigo",
        "violet"
    ];

    function setCountdownFunc() {
        // body...
    }

    useEffect(() => {
        setCountdown(level.time); // Reset countdown when level changes
        setIsFilled(false);
        setIsTimeout(false);
        setIsFillEmpty(false);
        setFillWidth(25);
    }, [currentLevel]);

    useEffect(() => {
        if (fillWidth >= 100) {
            setIsFilled(true);
        } else if (fillWidth <= 0) {
            setIsFillEmpty(true);
        }
    }, [fillWidth]);

    function shuffleArray(arr) {
        const shuffledArray = [...arr];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [
                shuffledArray[j],
                shuffledArray[i]
            ];
        }
        return shuffledArray;
    }

    function generateCalc() {
        const randNum = range => Math.floor(Math.random() * range);
        const rand1 = randNum(level.range);
        const rand2 = randNum(level.range);
        const total = rand1 + rand2;
        return `${rand1} + ${rand2} = ${total}`;
    }

    function generateFakeCalc() {
        const randNum = range => Math.floor(Math.random() * range);
        const rand1 = randNum(level.range);
        const rand2 = randNum(level.range);
        const rand3 = randNum(6);
        const total = rand1 + rand3 + rand2 + 1;
        return `${rand1} + ${rand2} = ${total}`;
    }

    const calcsArr = [
        { ques: generateCalc(), correct: true },
        { ques: generateFakeCalc(), correct: false },
        { ques: generateFakeCalc(), correct: false },
        { ques: generateFakeCalc(), correct: false }
    ];

    const [newCalcsArr, setNewCalcArr] = useState(() => shuffleArray(calcsArr));
    const [newColors, setNewColors] = useState(() => shuffleArray(colors));

    function checkCalc(data) {
        const shuffledColor = shuffleArray(colors);
        setNewColors(shuffledColor);
        const shuffleCalArr = shuffleArray(calcsArr);
        setNewCalcArr(shuffleCalArr);

        if (data) {
            setFillWidth(prevFillWidth => prevFillWidth + 75);
        } else {
            setFillWidth(prevFillWidth => prevFillWidth - 25);
        }
    }

    function nextLevel() {
        const newNextLevel = JSON.parse(localStorage.getItem("level")) + 1;
        localStorage.setItem("level", JSON.stringify(newNextLevel));
        setCurrentLevel(localStorage.getItem("level"));
        setCountdown(level.time);
        setIsFilled(false);
        setIsTimeout(false);
        setIsFillEmpty(false);
        setFillWidth(25);
    }

    function previousLevel() {
        const newPreviousLevel = JSON.parse(localStorage.getItem("level")) - 1;
        localStorage.setItem("level", JSON.stringify(newPreviousLevel));
        setCurrentLevel(localStorage.getItem("level"));
        setCountdown(level.time);
        setIsFilled(false);
        setIsTimeout(false);
        setIsFillEmpty(false);
        setFillWidth(25);
    }

    function restart() {
        setCurrentLevel(prevLevel => prevLevel);
        setIsFilled(false);
        setIsTimeout(false);
        setIsFillEmpty(false);
        setFillWidth(25);
        setCountdown(level.time);
    }

    return (
        <div className="h-[100dvh] flex flex-col bg-neutral-50">
            <Header
                setIsTimeout={setIsTimeout}
                level={localStorage.getItem("level")}
                countdown={countdown}
                setCountdown={setCountdown}
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
