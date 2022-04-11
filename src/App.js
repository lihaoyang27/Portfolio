
import './App.css';
import Welcome from "./components/Welcome";
import Main from "./components/Main";
import Game from "./components/Game";
import DataContext from "./helper/context";
import {useState} from "react";

function App() {
    const [showGame, setShowGame] = useState(true)
    const [showWel, setShowWel] = useState(false)
    const [showMain, setShowMain] = useState(false)


    return (
        <div className="App">
            <DataContext.Provider value={{showGame, setShowGame, setShowWel, setShowMain}}>
                {
                    showGame ?
                        <Game/>
                        : undefined
                }
                {showWel ?
                    <Welcome/>
                    : undefined
                }
                {
                    showMain ?
                        <Main/>
                        : undefined
                }
            </DataContext.Provider>
        </div>
    );
}

export default App;
