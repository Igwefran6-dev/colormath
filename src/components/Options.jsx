import Icon from "@mdi/react";
import { mdiRestart, mdiInformationOutline, mdiGithub } from "@mdi/js";

function Options(props) {
    const setIsDialogOpened = props.setIsDialogOpened;
    function toggleDialog() {
        setIsDialogOpened(prevBool => !prevBool);
    }
    function loadWebpage() {
        window.location.href = "https://github.com/Igwefran6-dev/tap-tap-go";
    }
    return (
        <div className="bg-zinc-700 min-h-[100px] grow flex justify-evenly items-center">
            <div className="w-[65px] h-[65px] bg-white rounded grid place-items-center">
                {<Icon path={mdiRestart} size={2} color="#404040" onClick={() => props.restart()}/>}
            </div>
            <div
                className="w-[65px] h-[65px] bg-white rounded grid place-items-center"
                onClick={loadWebpage}
            >
                {<Icon path={mdiGithub} size={2} color="#404040" />}
            </div>
            <div
                className="w-[65px] h-[65px] bg-white rounded grid place-items-center"
                onClick={() => toggleDialog()}
            >
                {<Icon path={mdiInformationOutline} size={2} color="#404040" />}
            </div>
        </div>
    );
}

export default Options;
