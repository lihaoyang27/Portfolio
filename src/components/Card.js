

const Card = ({item,id,handleClick}) => {
    // const itemClass = item.stat ? " active " + item.state : ""


    return(
        <div className={'card ' + item.stat} onClick={()=>handleClick(id)}>
            <img src={item.image} alt={item.id} />
            {/*{item.img}*/}
            {/*<img src= alt={item.id} />*/}
            {/*<img src='../media/musicshop1.jpg' alt=''/>*/}
        </div>
    )
}

export default Card