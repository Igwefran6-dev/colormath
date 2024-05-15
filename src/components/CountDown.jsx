import React, { useState, useEffect } from "react";

const CountdownTimer = props => {
    const countdown = props.countdown;
    const setCountdown = props.setCountdown;
    const isFilled = props.isFilled;
    const isFillEmpty = props.isFillEmpty;

    useEffect(() => {
        const timer = setInterval(() => {
            if (!isFilled && !isFillEmpty) {
                setCountdown(prevCountdown => {
                    if (prevCountdown > 0) {
                        return prevCountdown - 1;
                    } else {
                        clearInterval(timer);
                        return 0;
                    }
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [isFilled, isFillEmpty, setCountdown]);

    useEffect(() => {
        if (countdown === 0) {
            props.setIsTimeout(true);
        }
    }, [countdown, props.setIsTimeout]);

    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    return (
        <div className={countdown < 10 ? "text-red-500" : "text-white"}>
            🕓 {formattedMinutes}:{formattedSeconds}
        </div>
    );
};

export default CountdownTimer;