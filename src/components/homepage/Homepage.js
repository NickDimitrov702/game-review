import { AuthProvider } from '../../context/AuthContext.js'
import GameTemplate from '../game-template/GameTemplate.js'
import style from './Home.module.css'
import { useAuth } from '../../context/AuthContext.js'
import { useEffect, useState } from 'react'
import getData from '../../API-services/API-fetch/apiFetch.js'
import Populate from '../PopulatingComponent/Populator.js'


function Homepage() {
    const { login, currentUser } = useAuth([])
    const [data, setData] = useState([])
    const apiKey = '0bb3c776352a48b9a0a4fb7ad3821b6c'
    const urlImages = `https://rawg.io/api/games?key=${apiKey}`
    // `https://api.rawg.io/api/platforms?key=${apiKey}`

     function getImages() {

        return fetch(urlImages)
        .then(res => res.json()
        .then(data => console.log(data.results.map(x => console.log(x)))))
    }

  



    useEffect(() => {
    
        getData()
            .then(res => setData(res))
            .catch(error => console.log(error))

    }, [])


    console.log(data.map(x => console.log(x.platforms.map(x => console.log(x.platform.name)))))
    return (
        <div className={style.homePageWrapper}>
            {data.map(x =>
                <GameTemplate key={x.id} name={x.name} id={x.id} platform={x.platforms} />)
            }
            {/* <h2>HOme page </h2> */}
            <p></p>
        </div>


    )
}

export default Homepage