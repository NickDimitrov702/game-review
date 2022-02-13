import { Link } from "react-router-dom"

import style from './Header.module.css'

function Header() {
    return (

        <div className={style.headerWrapper}>
            <span className={style.logo}>RAWG game-reviews</span>
            <ul className={style.navBarWrapper}>
                <li className={style.navBarListItems}><Link className="main-nav-links" to='/'>Home</Link></li>
                <li className={style.navBarListItems}><Link className="main-nav-links" to='/about'>About</Link></li>
                <li className={style.navBarListItems}><Link className="main-nav-links" to='/populate'>Populate please</Link></li>
                <li className={style.navBarListItems}><Link className="main-nav-links" to='/populate'>Populate please</Link></li>
            </ul>
        </div>
    )

}

export default Header