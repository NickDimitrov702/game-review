import { useAuth } from '../../context/AuthContext.js'
import style from './UserDashboard.module.css'
import UserGamesTemplate from './UsersGamesTemplate.js'
import { doc, collection, addDoc, onSnapshot, getDoc, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from '../services/firebase/firebase.js'

function UserDashboard({
    id
}) {

    
    const [userGameData, setGameData] = useState([])

    const { login, currentUser } = useAuth()

    useEffect(async () => {



        try {
            const q = query(collection(db, `${currentUser.email}`))

            const querySnapshot = await getDocs(q);
            onSnapshot(q, (querySnapshot) => {
                setGameData(querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            })


            // querySnapshot.forEach(doc => {

            //     setGameData([doc.data()])

            // })

          

        } catch {

        }

        // querySnapshot.forEach((doc) => {
        //     // doc.data() is never undefined for query doc snapshots
        //     console.log(doc.id, " => ", doc.data());
        // });


        // getDoc(doc(db, `${currentUser.email}`, 'gameTemplates',)).then(docSnap => {
        //     if (docSnap.exists()) {
        //         console.log("Document data:", docSnap.data());
        //         setGameData([docSnap.data()])
        //     } else {
        //         console.log("No such document!",);
        //     }
        // })
        // const docSnap = getDoc(docRef);


    }, [currentUser])

    console.log(userGameData.map(x => console.log(x.data.name)))

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
            <div>
                {userGameData.map(x =>
                    <UserGamesTemplate key={x.id} name={x.data.name} {...x.data} />
                )}
            </div>



        </div>
    )
}

export default UserDashboard