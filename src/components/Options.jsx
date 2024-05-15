import Icon from "@mdi/react";
import { mdiMenu, mdiInformationOutline, mdiGithub } from "@mdi/js";

function Options() {
    return (
        <div className="bg-zinc-700 min-h-[100px] grow flex justify-evenly items-center">
            <div className="w-[65px] h-[65px] bg-white rounded grid place-items-center" onClick="">
                {<Icon path={mdiMenu} size={2} color="#404040" />}
            </div>
            <div className="w-[65px] h-[65px] bg-white rounded grid place-items-center">
                {<Icon path={mdiGithub} size={2} color="#404040" />}
            </div>
            <div className="w-[65px] h-[65px] bg-white rounded grid place-items-center">
                {<Icon path={mdiInformationOutline} size={2} color="#404040" />}
            </div>
        </div>
    );
}

export default Options;
