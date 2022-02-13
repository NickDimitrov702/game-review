import GameTemplate from '../game-template/GameTemplate.js'
import style from './Home.module.css'

function Homepage() {

    return (
        <div className={style.homePageWrapper}>
            <GameTemplate />
            <p>This is Homepage Content</p>
        </div>
    )
}

export default Homepage