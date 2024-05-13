import React, { useState, useEffect } from "react";

const CountdownTimer = props => {
    let time = props.time;
    const [countdown, setCountdown] = useState(time);

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

    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    return (
        <>
            {formattedMinutes}:{formattedSeconds}
        </>
    );
};

export default CountdownTimer;
