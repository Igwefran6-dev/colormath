import React, { useState, useEffect } from "react";

const CountdownTimer = props => {
    const [countdown, setCountdown] = useState(60);
    
    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prevCountdown => {
                if (prevCountdown > 0) {
                    return prevCountdown - 1;
                } else {
                    clearInterval(timer);
                    return 0;
                }
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

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
