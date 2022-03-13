import { useAuth } from '../../context/AuthContext.js'
import style from './UserDashboard.module.css'

function UserDashboard() {

    const { login, currentUser } = useAuth()


    return (
        <div className={style.UserDashboardWrapper}>
           <aside className={style.aside}>
               <header className={style.UserHeader}>
                   <p>User Icon</p>
                   <h2>{currentUser.email}</h2>
               </header>
               <div>
                   <div>
                       <ul>
                           <h2>User Status</h2>
                           <li>Wish list count:</li>
                           <li>Prefed OS:</li>
                           <li>Last log in:</li>
                       </ul>
                   </div>
               </div>
           </aside>
        </div>
    )
}

export default UserDashboard