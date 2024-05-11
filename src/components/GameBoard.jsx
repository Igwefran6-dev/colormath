function GameBoard(argument) {
    return (
        <div className=" h-[100dvw] w-[100dvw] grid grid-cols-2 grid-rows-2 gap-1 pl-1 pr-1">
            <div className="w-[100%] h-[100%] bg-red-300"></div>
            <div className="w-[100%] h-[100%] bg-violet-300"></div>
            <div className="w-[100%] h-[100%] bg-green-300"></div>
            <div className="w-[100%] h-[100%] bg-blue-300"></div>
        </div>
    );
}

export default GameBoard
