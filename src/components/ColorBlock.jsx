function ColorBlock(props) {
    let style = `w-[100%] h-[100%] bg-${props.color}-300 hover:opacity-75 text-white text-2xl p-4 grid place-content-center rounded`;
    return (
        <div
            onClick={() => props.checkCalc(props.condition.correct)}
            className={style}
        >
            {props.calc}
        </div>
    );
}

export default ColorBlock;
