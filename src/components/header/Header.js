import { useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { AuthProvider, useAuth } from "../../context/AuthContext"

import style from './Header.module.css'




function Header() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const { history } = useHistory()

    async function handleLogOut() {
        console.log('logout')
        setError('')
    
        try {
            await logout()
            history.push('/log-in')
        } catch {
            setError('Failed to log out')
        }
    }

    return (

        <div className={style.headerWrapper}>
            <span className={style.logo}><Link className={style.logo} to='/'>RAWG game-reviews</Link></span>
            <div className={style.burger}>
                <div className={style.burgerLine}></div>
            </div>
            <ul className={style.navBarWrapper}>
                <li className={style.navBarListItems}><Link className="main-nav-links" to='/'>Home</Link></li>
                <li className={style.navBarListItems}><Link className="main-nav-links" to='/about'>About</Link></li>
                <li className={style.navBarListItems}><Link className="main-nav-links" to='/log-in'>Log in</Link></li>
                <li className={style.navBarListItems}><Link className="main-nav-links" to='/sign-up'>Sign up</Link></li>
                {/* <li className={style.navBarListItems}><input type="submit" onClick={handleLogOut} className="main-nav-links" value="Log out" /></li> */}
                <li className={style.navBarListItems}><Link className="main-nav-links" to='/log-in' onClick={handleLogOut}>Log Out</Link></li>
            </ul>
        </div>


    )

}

export default Header