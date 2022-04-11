

const Card = ({item,id,handleClick}) => {



    return(
        <div className={'card ' + item.stat} onClick={()=>handleClick(id)}>
            <img src={item.image} alt={item.id} />

        </div>
    )
}

export default Card