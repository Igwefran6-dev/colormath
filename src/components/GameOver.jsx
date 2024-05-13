import Button from "./Button";
import { mdiRestart, mdiSkipPrevious } from "@mdi/js";

function GameOver(props) {
    return (
        <div className="min-h-[100vh] min-w-h-[100vw] z-10 bg-red fixed top-0 hidden">
            <div className="bg-white rounded border-2 border-neutral-200 fixed fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-auto p-3 text-center">
                <h3 className="text-2xl font-bold  text-neutral-600">
                    Game Over
                </h3>
                <p>Timeout</p>
                <div className="flex gap-2 justify-center">
                    <Button path={mdiSkipPrevious} size="42" color="#525252" />
                    <Button path={mdiRestart} size="42" color="#525252" />
                </div>
            </div>
        </div>
    );
}

export default GameOver;
