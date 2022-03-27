import { doc, setDoc } from "firebase/firestore";
import React from "react";
import { Fragment } from 'react'
import style from './Populate.module.css'
import {db} from '../services/firebase/firebase.js'
import { useAuth } from "../../context/AuthContext";

function Populate({
    name,
    id,
    slug,
    image,
    os
}) {

    const {currentUser} = useAuth()
    
    const addGame = (e) => {
        console.log('populate')
        let gameDetails = {}
        let gameName = document.querySelectorAll('.gameName')[0]
        let osName = document.querySelectorAll('.osName')[0]

        gameDetails = {
            name: gameName.innerText,
            os: osName.innerText
        }

        setDoc(doc(db, `${currentUser.email}`, "gameTemplate"), {
            name: gameDetails.name,
            os: gameDetails.os,
            country: "USA"
        });


        return console.log(gameDetails)
    }



    return (
        <div className={style.gameTemplateComponentWrapper} >

            <div className={style.gameTempalteWrapper} >
                {/* <img className={style.img} src={image}/> */}
                <header>
                    <h1>Game image Slide show</h1>
                </header>
                <main >
                    <p>Main Content for the game </p>
                    <div className='gameName'>
                        <p>{name}</p>
                    </div>
                    <div>
                        <p className="osName">{os}</p>
                    </div>
                </main>
                <footer>
                    <button onClick={addGame}>Add</button>
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

export default Populate;
