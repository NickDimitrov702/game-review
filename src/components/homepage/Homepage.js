import { AuthProvider } from '../../context/AuthContext.js'
import GameTemplate from '../game-template/GameTemplate.js'
import style from './Home.module.css'
import { useAuth } from '../../context/AuthContext.js'
import { useEffect, useState } from 'react'
import getData from '../../API-services/API-fetch/apiFetch.js'

function Homepage() {
    const { login, currentUser } = useAuth([])
    const [data, setData] = useState()

    useEffect(() => {

        getData
            .then(res => setData(res))
            .catch(error => console.log('ERROR'))


    }, [])

    return (
        <div className={style.homePageWrapper}>
            {data.map(x =>
                <GameTemplate key={x.id} name={x.name} {...x} />)}

        </div>


    )
}

export default Homepage