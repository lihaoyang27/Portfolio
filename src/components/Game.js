import '../style/game.scss'
import Cards from "./Cards";

const Game = () => {

    return(
        <div className='gameSection'>
            <h1>Memory Game - React</h1>
            <Cards/>
        </div>
    )
}

export default Game