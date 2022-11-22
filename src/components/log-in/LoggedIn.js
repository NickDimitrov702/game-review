import style from './LogIn.module.css'
import { useAuth } from '../../context/AuthContext'
function LoggedIn() {

    const { login, currentUser } = useAuth()

        return (
            <div className={style.greetingsWrapper}>
                <p>Welcome</p>
                <p className={style.headerHello}>{currentUser.email}</p>
            </div>
        )
    }

export default LoggedIn