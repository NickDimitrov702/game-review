import { useAuth } from '../../context/AuthContext.js'
import style from './UserDashboard.module.css'
import UserGamesTemplate from './UsersGamesTemplate.js'
import { doc, collection, addDoc, onSnapshot, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from '../services/firebase/firebase.js'

function UserDashboard() {

    // const { currentUser } = useAuth()
    const [userGameData, setGameData] = useState([])

    const { login, currentUser } = useAuth()

    useEffect(() => {
        getDoc(doc(db, `${currentUser.email}`, 'gameTemplate')).then(docSnap => {
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setGameData([docSnap.data()])
            } else {
                console.log("No such document!");
            }
        })
        // const docSnap = getDoc(docRef);


    }, [])
    console.log(userGameData.map(x => { console.log(x.name) }))
    return (
        <div className={style.UserDashboardWrapper}>

            <aside className={style.aside}>
                <header className={style.UserHeader}>
                    <p>User Icon</p>
                    <h2>{currentUser.email}</h2>
                </header>
                <div>
                    <div>
                        <ul>
                            <h2>User Status</h2>
                            <li>Wish list count:</li>
                            <li>Prefed OS:</li>
                            <li>Last log in:</li>
                        </ul>
                    </div>
                </div>
            </aside>
            {userGameData.map(x => 
                <UserGamesTemplate key={x.country} name={x.name} {...x} />
            )}
        </div>
    )
}

export default UserDashboard