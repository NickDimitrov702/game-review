import { doc, collection, addDoc, onSnapshot, getDoc, deleteDoc } from "firebase/firestore";
import { db } from '../services/firebase/firebase.js'
import style from './UserGamesTemplate.module.css'
import { useAuth } from '../../context/AuthContext.js'
import { useEffect, useState } from "react";
import getData from '../../API-services/API-fetch/apiFetch.js';
import Screenshots from "../screenshots/Screenshots.js";
import { Carousel } from "react-responsive-carousel";
function UserGamesTemplate({
    name,
    os,
    country,
    id,
    img

}) {

    const apiKey = '0bb3c776352a48b9a0a4fb7ad3821b6c'
    const urlImages = `https://rawg.io/api/games?key=${apiKey}`

    const [detailsState, SetDetailsState] = useState(true)
    const [platforms, setPlatforms] = useState([])
    const [setScreenShots,setScreeshots] = useState([])
    const [data, setData] = useState([])
    const { currentUser } = useAuth()
    

    function seeMoreInfo(e) {
        e.preventDefault()
        let platformsDetailsElement = e.target.parentElement.parentElement.children[3]
        // console.log(platformsDetailsElement)
        if (detailsState === true) {
            platformsDetailsElement.style = 'height:345px; transition: 1s'
            SetDetailsState(false)
        } else if (detailsState === false) {
            platformsDetailsElement.style = 'height:104px; transition: 1s'
            SetDetailsState(true)
        }

        console.log(platformsDetailsElement)
    }

    async function deleteGame(e) {
        e.preventDefault()
        try {
            await deleteDoc(doc(db, `${currentUser.email}`, `${id}`));

        } catch {
            console.error('COULD NOT DELETE GAME')
        }
    }

    useEffect(() => {
        getData()
        .then(res => res.map)
        .catch(error => console.log(error))
        setPlatforms(os)
        setScreeshots(img)

    }, [platforms])
    
console.log(setScreenShots)
    return (
        <div className={style.gameTemplateComponentWrapper} >
            <div className={style.gameTempalteWrapper} >
                <div className='gameName' id={style.gameName}>
                    <p>{name}</p>
                </div>
                <header className={style.imageSlideShowWrapper}>
                <Carousel showThumbs={false}>
                        {setScreenShots.map(x => <Screenshots key={x} image={x} />)}
                    </Carousel>
                </header>
                <footer className={style.footreWrapper}>
                    <button className={style.button} onClick={deleteGame} >Delete</button>
                    <button className={style.button} onClick={seeMoreInfo}>See more</button>
                    <button className={style.button}>Reviews</button>
                </footer>
                <header className={style.platformWrapper}>
                    {platforms.map(x => <>
                        <div className={style.osWrapper}>
                            <p>{x}</p>
                        </div>
                    </>)}
                </header>
            </div>
        </div>




    )
}

export default UserGamesTemplate



