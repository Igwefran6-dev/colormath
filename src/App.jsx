import Header from "./components/Header";
import Fill from "./components/Fill";
import GameBoard from "./components/GameBoard";
import ColorPalateView from "./components/Color-Palate-View.jsx";
import PowerUps from "./components/Power-Ups";
import Footer from "./components/Footer";
import Data from "./components/Data.jsx";
import { useState } from "react";

function App() {
    let [fillWidth, setFillWidth] = useState(25);
    return (
        <div className="min-h-[100dvh] flex flex-col bg-neutral-50 ">
            <Header />
            <Fill fill={fillWidth} />
            <GameBoard setFill={setFillWidth} fill={fillWidth} />
            <ColorPalateView />
            <PowerUps />
            <Footer />
        </div>
    );
}

export default App;
