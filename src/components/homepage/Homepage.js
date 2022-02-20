import { AuthProvider } from '../../context/AuthContext.js'
import GameTemplate from '../game-template/GameTemplate.js'
import style from './Home.module.css'
import { useAuth } from '../../context/AuthContext.js'


function Homepage() {
    const { login, currentUser } = useAuth()
    return (

        <div className={style.homePageWrapper}>
            <GameTemplate />
        </div>


    )
}

export default Homepage