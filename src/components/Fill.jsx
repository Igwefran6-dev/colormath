function Fill(props) {
    let width = props.fill;
    let style = {
        width: width + "%"
    };
    return (
        <div className="min-h-[50px] p-1">
            <div
                className={`bg-amber-400 h-[50px] rounded transition-all ease-in-out delay-100`}
                style={style}
            ></div>
        </div>
    );
}

export default Fill;
