

const Card = ({item}) =>{
    console.log('img',item.img)

    return(
        <div className='card' style={{backgroundImage:`url('../media/e-commerce1.jpg')`}}>
            <img src={item.img} alt={item.id} />
            {item.img}
            {/*<img src= alt={item.id} />*/}
            {/*<img src='../media/musicshop1.jpg' alt=''/>*/}
        </div>
    )
}

export default Card