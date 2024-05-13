import Header from "./components/Header";
import Fill from "./components/Fill";
import GameBoard from "./components/GameBoard";
import ColorPalateView from "./components/Color-Palate-View.jsx";
import PowerUps from "./components/Power-Ups";
import Footer from "./components/Footer";
import Data from "./components/Data";
import Win from "./components/Win";
import GameOver from "./components/GameOver";
import { useState, useEffect } from "react";

function App() {
    let [fillWidth, setFillWidth] = useState(25);
    return (
        <div className="h-[100dvh] flex flex-col bg-neutral-50}">
            <Header />
            <Fill fill={fillWidth} />
            <GameBoard setFill={setFillWidth} fill={fillWidth} />
            <ColorPalateView />

            <GameOver />
            <Win />

            <PowerUps />
            <Footer />
        </div>
    );
}

export default App;
