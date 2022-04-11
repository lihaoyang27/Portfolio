
const PortfolioProject = () => {
    return(
        <div className='portfolio'>
            <div className='title'>Portfolio</div>
            <div className='itemContainer'>

                <div className='item'>
                    <div className='itemTitle'>
                        E-Commerce Web
                    </div>
                    <div className='itemImg eCo1'></div>
                    <div className='itemImg eCo2'></div>
                </div>

                <div className='item'>
                    <a href='https://github.com/lihaoyang27/e-commerce-music-shop_React-Redux'>
                        <div className='itemTitle'>
                            Music Shop
                        </div>
                    </a>
                    <div className='itemImg music1'></div>
                    <div className='itemImg music2'></div>

                </div>

                <div className='item'>
                    <a href='https://github.com/lihaoyang27/clone_weatherStack_static-HTML-CSS-'>
                        <div className='itemTitle'>
                            Weather Stack(static)
                        </div>
                    </a>
                    <div className='itemImg weather1'></div>
                    <div className='itemImg weather2'></div>

                </div>

                <div className='item'>
                    <a href='https://github.com/lihaoyang27/clone_weatherStack_static-HTML-CSS-'>
                        <div className='itemTitle'>
                            LMS Management System
                        </div>
                    </a>
                    <div className='itemImg lms1'></div>
                    <div className='itemImg lms2'></div>

                </div>


            </div>
        </div>

    )
}

export default PortfolioProject