import { doc, collection, setDoc, addDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Fragment } from 'react'
import style from './Populate.module.css'
import { db } from '../services/firebase/firebase.js'
import { useAuth } from "../../context/AuthContext";
import AddButton from "../Button/Button";
import Platfrom from "../platform/Platfrom";

function Populate({
    name,
    id,
    slug,
    image,
    os,
    platform
    
}) {
    const [platformName,SetPlaftormName] = useState([])
    const { currentUser } = useAuth()
    // For add game need to create a Button component so it can be passed to all other components. 
    // Create event in button component, an event that will take the data from this.component
    const addGame = (e, data) => {

        let targetTemplateData = e.target.parentElement.parentElement.children[2]
        let gameName = targetTemplateData.children[1].children[0]
        // let osName = targetTemplateData.children[2]
        let gameDetails = {}

        console.log('populate', e.target, data, e.target.offsetParent,targetTemplateData, gameName.innerText,id)

       let games = []

        gameDetails = {
            name: gameName.innerText,
            
        }

        games.push(gameDetails)

        const gameRef = collection(db,`${currentUser.email}`,)
        
        setDoc(doc(gameRef,`${id}` ), {
            name: gameDetails.name,
            country: 'US',
            id: id,

        });


        
    }

    useEffect(() => {
        SetPlaftormName(platform)
    },[])

    console.log(platformName.map(x => console.log(x.platform)))

    return (
        <div className={style.gameTemplateComponentWrapper} >
            <div className={style.gameTempalteWrapper} >
                <img className={style.img} src={image}/>
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
                    {/* <AddButton /> */}
                    <button>Wishlist</button>
                    <button>Reviews</button>
                </footer>
                <header className={style.platformWrapper}>
                    {platformName.map(x => 
                        <Platfrom key={x.platform.id} name={x.platform.name}/>)}
                </header>
            </div>
        </div>


    )
}

export default Populate;
