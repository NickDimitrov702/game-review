
import style from './About.module.css'

function About() {
    return (
        <div className={style.aboutWrapper}>
            <h2>Practice for using React.js</h2>
            <ul>
                <li className={style.listItems}><a href="https://github.com/NickDimitrov702" target="_blank">GitHub</a></li>
                <li className={style.listItems}><a href="https://www.linkedin.com/in/nikolay-dimitrov-434447159/" target="_blank">Linked in</a></li>
                <li className={style.listItems}><a href="https://rawg.io/" target="_blank">RAWG</a></li>
            </ul>
        </div>
    )
}

export default About