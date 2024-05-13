import Button from "./Button";
import { mdiRestart, mdiSkipPrevious } from "@mdi/js";

function GameOver(props) {
    const isFilled = props.isFilled;
    const isFillEmpty = props.isFillEmpty;
    const isTimeout = props.isTimeout;
    return (
        <div
            className={
                "h-[100dvh] w-[100dvw] z-10 bg-[#525252aa] fixed top-0 right-0 left-0 hidden" +
                ((isTimeout && !isFilled) || (isFillEmpty && !isFilled)
                    ? "block"
                    : "")
            }
        >
            <div className="bg-white rounded border-2 border-neutral-200 fixed fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-auto p-3 text-center">
                <h3 className="text-2xl font-bold  text-neutral-600">
                    Game Over
                </h3>
                <p>Try Again</p>
                <div className="flex gap-2 justify-center">
                    <Button path={mdiSkipPrevious} size="42" color="#525252" handleClick={props.previousLevel}/>
                    <Button
                        path={mdiRestart}
                        size="42"
                        color="#525252"
                        handleClick={props.restart}
                    />
                </div>
            </div>
        </div>
    );
}

export default GameOver;
