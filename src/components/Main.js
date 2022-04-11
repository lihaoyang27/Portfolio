import '../style/main.scss'
import PortfolioProject from "./PortfolioProject";

const Main = () => {

    return(
        <div className='mainContainer'>
            <div className='infoSection'>
                <div className='photo'></div>
                <div className='info'>
                    <h2>Looking for a position as:</h2>
                    <div>Front-end Developer</div>
                    <div>React Developer</div>
                    <div>Full-stack Developer</div>
                </div>
                <div className='contact'>
                    <h2>Contact:</h2>
                    <div className='logoGroup'>
                        <a href='https://www.linkedin.com/in/haoyang-li-bba994235//' >
                        <div className='logoIn' > </div>
                        </a>
                        <a href='https://github.com/lihaoyang27' >
                        <div className='logoGit' > </div>
                        </a>
                    </div>
                </div>
            </div>
            <PortfolioProject/>
        </div>
    )
}

export default Main