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

    useEffect(() => {

        getData()
            .then(res => setData(res))
            .catch(error => console.log(error))
   
    }, [])

    
    console.log(data)
    return (
        <div className={style.homePageWrapper}>
            {data.map(x => 
                
                <GameTemplate key={x.id} name={x.name} {...x} />)
                }

            <h2>HOme page </h2>
            <p></p>
        </div>


    )
}

export default Homepage