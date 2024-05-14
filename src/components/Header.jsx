import CountDown from "./CountDown";

function Header(props) {
    return (
        <div className="bg-zinc-700 min-h-[15vh] flex justify-between p-3">
            <div className="text-2xl font-bold flex flex-col justify-between text-white">
                <div className="text-4xl">
                    <span className="text-orange-300 underline">color</span>
                    <span className="text-indigo-300 underline">math</span>
                </div>
                <div>Level {props.level}</div>
            </div>
            <div className="text-2xl font-bold flex flex-col text-right text-white justify-between">
                <div className=""></div>
                <div>
                    <CountDown
                        countdown={props.countdown}
                setCountdown={props.setCountdown}
                        setIsTimeout={props.setIsTimeout}
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;
