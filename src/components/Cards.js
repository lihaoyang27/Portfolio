import {useContext, useState} from "react";
import Card from "./Card";
import DataContext from "../helper/context";


const Cards = () => {
    const [items, setItems] = useState([
        {id: 1, image: "/game/html.png", stat:""},
        {id:1, image:'/game/html.png', stat:""},
        {id:2, image:'/game/css.png', stat:""},
        {id:2, image:'/game/css.png', stat:""},
        {id:3, image:'/game/angular.png', stat:""},
        {id:3, image:'/game/angular.png', stat:""},
        {id:4, image:'/game/github.png', stat:""},
        {id:4, image:'/game/github.png', stat:""},
        {id:5, image:'/game/MUI.png', stat:""},
        {id:5, image:'/game/MUI.png', stat:""},
        {id:6, image:'/game/React.png', stat:""},
        {id:6, image:'/game/React.png', stat:""},
        {id:7, image:'/game/sass.png', stat:""},
        {id:7, image:'/game/sass.png', stat:""},
        {id:8, image:'/game/vue.png', stat:""},
        {id:8, image:'/game/vue.png', stat:""},

    ].sort(() => Math.random() - 0.5))
    const [prev, setPrev] = useState(-1)
    const {showGame, setShowGame, setShowWel} = useContext(DataContext)


    if(items.filter((item)=>item.stat !== 'active correct').length === 0){
            setShowGame(false)
            setShowWel(true)
    }

    const check = (current) => {
        if (items[current].id === items[prev].id){
            items[current].stat = 'active correct'
            items[prev].stat = 'active correct'
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].stat = 'active wrong'
            items[prev].stat = 'active wrong'
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            },1000)
        }
    }

    const handleClick = (id) => {
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }


    return(
        <>
            {showGame ?
                <div className='gameContainer'>
                    {
                        items.map((value, index) =>
                            (
                                <Card item={value} key={index} id={index} handleClick={handleClick}/>

                            )
                        )
                    }
                </div>
                : undefined
            }
        </>
    )
}

export default Cards