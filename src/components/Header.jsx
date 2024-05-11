function Header(props) {
    return <div className="bg-zinc-700 min-h-[15vh] flex justify-between p-3">
                <div className="text-2xl font-bold flex flex-col justify-between text-white">
                    <div className="text-4xl">
                        <span className="text-orange-300 underline">tap</span>
                        <span className="text-indigo-300 underline">tap</span>
                        <span className="text-green-300 underline">Go</span>
                    </div>
                    <div>Best: Level 1</div>
                </div>
                <div className="text-2xl font-bold flex flex-col text-right text-white justify-between">
                    <div className="">♥️ 3</div>
                    <div className="">🕓 00:00</div>
                    <div className="">Level 1</div>
                </div>
            </div>;
}

export default Header;
