import Icon from "@mdi/react";

function Button(props) {
    return (
        <button className="p-2 border-2 border-neutral-400 rounded">
            <Icon path={props.path} size={props.size} color={props.color} />
        </button>
    );
}

export default Button;
