import { Link } from "react-router-dom"

import style from './Header.module.css'

function Header() {
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
            </ul>
        </div>
    )

}

export default Header