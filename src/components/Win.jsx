import Button from "./Button";
import { mdiRestart, mdiSkipPrevious, mdiSkipNext } from "@mdi/js";

function Win(props) {
    const isFilled = props.isFilled;
    return (
        <div
            className={
                "h-[100dvh] w-[100dvw] z-10 bg-[#525252aa] fixed top-0 right-0 left-0 hidden" +
                (isFilled ? "block" : "")
            }
        >
            <div className="bg-white rounded border-2 border-neutral-200 fixed  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-auto z-20 p-3 text-center">
                <h3 className="text-2xl font-bold  text-neutral-600">
                    You Win
                </h3>
                <p>Congratulations</p>
                <div className="flex gap-2 justify-center">
                    <Button
                        path={mdiSkipPrevious}
                        size="42"
                        color="#525252"
                        handleClick={props.previousLevel}
                    />
                    <Button path={mdiRestart} size="42" color="#525252" handleClick={props.restart} />
                    <Button
                        path={mdiSkipNext}
                        size="42"
                        color="#525252"
                        handleClick={props.nextLevel}
                    />
                </div>
            </div>
        </div>
    );
}

export default Win;
