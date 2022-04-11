import '../style/welcome.scss'
import {useContext} from "react";
import DataContext from "../helper/context";


const Welcome = () => {
    const {setShowWel, setShowMain} = useContext(DataContext)

    return (
        <>

                    <div className='welcomeContainer' onClick={() => {
                        setShowWel(false)
                        setShowMain(true)
                    }}>

                        <div className='fog'></div>
                        <div className='mask'>
                            <div className='lihaoyang'></div>
                        </div>

                    </div>

        </>
    )

}

export default Welcome