import Header from "./components/Header";
import Fill from "./components/Fill";
import GameBoard from "./components/GameBoard";
import ColorPalateView from "./components/Color-Palate-View.jsx";
import PowerUps from "./components/Power-Ups";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="min-h-[100dvh] flex flex-col bg-neutral-50">
            <Header />
            <Fill />
            <GameBoard />
            <ColorPalateView />
            <PowerUps />
            <Footer />
        </div>
    );
}

export default App;
