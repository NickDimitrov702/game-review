
import style from './Footer.module.css'

function Footer() {

    return (
        <footer className={style.footerWrapepr}>
            <ul className={style.listItemsWrapper}>
                <li className={style.listItems}><a href="https://github.com/NickDimitrov702/game-review" target="_blank">GitHub</a></li>
                <li className={style.listItems}><a href="https://www.linkedin.com/in/nikolay-dimitrov-434447159/" target="_blank">Linked in</a></li>
                <li className={style.listItems}><a href="https://rawg.io/" target="_blank">RAWG</a></li>
            </ul>
        </footer>
    )
}

export default Footer