import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import { AuthProvider, useAuth } from "../../context/AuthContext"

import style from './Header.module.css'




function Header() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const { history } = useNavigate()

    async function handleLogOut() {

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
            {currentUser &&
                <ul className={style.navBarWrapper}>
                    <li className={style.navBarListItems}><Link className="main-nav-links" to='/'>Home</Link></li>
                    <li className={style.navBarListItems}><Link className="main-nav-links" to='/about'>About</Link></li>
                    <li className={style.navBarListItems}><Link className="main-nav-links" to='/dashboard'>Users Dashboard</Link></li>
                    <li className={style.navBarListItems}><Link className="main-nav-links" to='/log-in' onClick={handleLogOut}>Log Out</Link></li>
                </ul>
            }
            {!currentUser &&
                <ul className={style.navBarWrapper}>
                    <li className={style.navBarListItems}><Link className="main-nav-links" to='/'>Home</Link></li>
                    <li className={style.navBarListItems}><Link className="main-nav-links" to='/about'>About</Link></li>
                    <li className={style.navBarListItems}><Link className="main-nav-links" to='/log-in'>Log in</Link></li>
                    <li className={style.navBarListItems}><Link className="main-nav-links" to='/sign-up'>Sign up</Link></li>
                    {/* <li className={style.navBarListItems}><input type="submit" onClick={handleLogOut} className="main-nav-links" value="Log out" /></li> */}
                </ul>
            }
        </div>


    )

}

export default Header