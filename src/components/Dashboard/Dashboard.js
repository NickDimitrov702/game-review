import { AuthProvider } from '../../context/AuthContext.js'
import GameTemplate from '../game-template/GameTemplate.js'
// import style from './Home.module.css'
import { useAuth } from '../../context/AuthContext.js'


function Dashboard() {
    const { login, currentUser } = useAuth()
    return (

        <div >
            ]<h1>THIS IS DASHBOARD</h1>
            {/* {JSON.stringify(currentUser)}
            <GameTemplate /> */}
        </div>


    )
}

export default Dashboard