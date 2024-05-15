import { useState } from "react";

function HowToPlay(props) {
    const isDialogOpened = props.isDialogOpened;
    const setIsDialogOpened = props.setIsDialogOpened;
    function toggleDialog() {
        setIsDialogOpened(false);
    }
    return (
        <div
            className={
                "z-40 h-[450px] w-[350px] bg-[#fafafa] rounded fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 text-neutral-600 " +
                (!isDialogOpened ? "hidden" : "")
            }
            onClick={() => toggleDialog()}
        >
            <h3 className="text-center text-[18px] font-bold mb-4 ">
                How to play
            </h3>
            <div className="pl-2 border-l-2">
                <p className="mb-2">
                    To <b>win</b> the game, click on right calculations to fill
                    the amber colored fill view at the top.
                </p>
                <p className="mb-2">
                    When the amber fill view is empty, <b>gameover</b>.
                </p>
                <p className="mb-2">
                    When coundown is zero, <b>gameover</b>.
                </p>
                <p className="mb-2">
                    Next level button only appears when a level is completed.
                </p>
                <p className="mb-2">
                    The game will get harder on each level up and countdown will
                    be lesser.
                </p>
                <p className="mb-2">
                    You can also go back to previous level with the previous
                    button
                </p>
                <p className="font-bold mb-2 text-red-700">
                    Click anywhere to close this dialog.
                </p>
            </div>
        </div>
    );
}

export default HowToPlay;
