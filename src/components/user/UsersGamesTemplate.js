import { collection, addDoc } from "firebase/firestore";
import { db } from '../services/firebase/firebase'
import style from './UserGamesTemplate.module.css'


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
                        {}
                    </div>
                    <div>
                        <p>{}</p>
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



