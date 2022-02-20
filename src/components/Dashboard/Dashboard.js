import { AuthProvider } from '../../context/AuthContext.js'
import GameTemplate from '../game-template/GameTemplate.js'
// import style from './Home.module.css'
import { useAuth } from '../../context/AuthContext.js'
import style from './Dashboard.module.css'

function Dashboard() {
    const { login, currentUser } = useAuth()

    return (
        <div className={style.dashBoardWrapper}>
            {currentUser &&
                <div className={style.dashboardHeaderWrapper}>
                    <h1>{currentUser.email}</h1>
                    <h1>THIS IS DASHBOARD</h1>
                </div>
                }
        </div>





    )
}

export default Dashboard