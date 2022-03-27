import { doc, collection, addDoc, onSnapshot, getDoc } from "firebase/firestore";
import { db } from '../services/firebase/firebase.js'
import style from './UserGamesTemplate.module.css'
import { useAuth } from '../../context/AuthContext.js'
import { useEffect, useState } from "react";

function UserGamesTemplate() {
    // try {
    //     const docRef = addDoc(collection(db, "users"), {
    //         first: "Ada",
    //         last: "Lovelace",
    //         born: 1815
    //     });
    //     console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //     console.error("Error adding document: ", e);
    // }

    const { currentUser } = useAuth()
    const [userGameData, setGameData] = useState([])



    useEffect(() => {
        getDoc(doc(db, `${currentUser.email}`, 'gameTemplate')).then(docSnap => {
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setGameData(docSnap.data())
            } else {
                console.log("No such document!");
            }
        })
        // const docSnap = getDoc(docRef);


    }, [])

    // console.log(userGameData)



    return (
        <div className={style.gameTemplateComponentWrapper} >

            <div className={style.gameTempalteWrapper} >
                {/* <img className={style.img} src={image}/> */}
                <header>
                    <h1>Game image Slide show</h1>
                </header>
                <main >
                    <p>Main Content for the game </p>
                    <div>
                        { }
                    </div>
                    <div>
                        <p>{userGameData.name}</p>
                    </div>
                </main>
                <footer>
                    <button>Add</button>
                    <button>Wishlist</button>
                    <button>Reviews</button>
                </footer>
                <header>
                    <p>Icon for OS</p>
                </header>
            </div>
        </div>


    )
}

export default UserGamesTemplate



