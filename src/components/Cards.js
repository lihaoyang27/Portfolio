import {useState} from "react";
import Card from "./Card";


const Cards = () => {
    const [items, setItems] = useState([
        {id: 1, img: "../media/game/html.png", stat:''},
        {id:1, img:'../media/game/html.png', stat:''},
        {id:2, img:'../media/game/css.png', stat:''},
        {id:2, img:'../media/game/css.png', stat:''},
        {id:3, img:'../media/game/angular.png', stat:''},
        {id:3, img:'../media/game/angular.png', stat:''},
        {id:4, img:'../media/game/github.png', stat:''},
        {id:4, img:'../media/game/github.png', stat:''},
        {id:5, img:'../media/game/MUI.png', stat:''},
        {id:5, img:'../media/game/MUI.png', stat:''},
        {id:6, img:'../media/game/React.png', stat:''},
        {id:6, img:'../media/game/React.png', stat:''},
        {id:7, img:'../media/game/sass.png', stat:''},
        {id:7, img:'../media/game/sass.png', stat:''},
        {id:8, img:'../media/game/vue.png', stat:''},
        {id:8, img:'../media/game/vue.png', stat:''}

    ].sort(() => Math.random() - 0.5))


    return(
        <div className='gameContainer'>
            {items.map((value,index) =>
                (
                <Card item={value} key={index}/>
                )
            )}
        </div>
    )
}

export default Cards