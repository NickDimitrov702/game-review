import { doc, collection, setDoc, addDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Fragment } from 'react'
import style from './Populate.module.css'
import { db } from '../services/firebase/firebase.js'
import { useAuth } from "../../context/AuthContext";
import AddButton from "../Button/Button";
import Platfrom from "../platform/Platfrom";
import Screenshots from "../screenshots/Screenshots";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Populate({
    name,
    id,
    slug,
    screenshots,
    os,
    platform

}) {
    const [platformName, SetPlaftormName] = useState([])
    const [detailsState, SetDetailsState] = useState(true)
    const { currentUser } = useAuth()
    // For add game need to create a Button component so it can be passed to all other components. 
    // Create event in button component, an event that will take the data from this.component
    const addGame = (e, data) => {

        let targetTemplateData = e.target.parentElement.parentElement.children[2]
        let gameName = targetTemplateData.children[1].children[0]
        // let osName = targetTemplateData.children[2]
        let gameDetails = {}

        console.log('populate', e.target, data, e.target.offsetParent, targetTemplateData, gameName.innerText, id)

        let games = []

        gameDetails = {
            name: gameName.innerText,

        }

        games.push(gameDetails)

        const gameRef = collection(db, `${currentUser.email}`,)

        setDoc(doc(gameRef, `${id}`), {
            name: gameDetails.name,
            country: 'US',
            id: id,

        });



    }

    function seeMoreInfo(e) {
        e.preventDefault()
        let platformsDetailsElement = e.target.parentElement.parentElement.children[4]
        console.log(platformsDetailsElement)
        if (detailsState === true) {
            platformsDetailsElement.style = 'height:345px; transition: 1s'
            SetDetailsState(false)
        } else if (detailsState === false) {
            platformsDetailsElement.style = 'height:104px; transition: 1s'
            SetDetailsState(true)
        }

    }

    useEffect(() => {
        SetPlaftormName(platform)
    }, [])

    console.log(screenshots.map(x => console.log(x)))

    return (
        <div className={style.gameTemplateComponentWrapper} >
            <div className={style.gameTempalteWrapper} >
                <div className='gameName' id={style.gameName}>
                    <p>{name}</p>
                </div>
                <header className={style.imageSlideShowWrapper}>
                    <Carousel>
                        {screenshots.map(x => <Screenshots key={x.id} image={x.image} />)}
                    </Carousel>
                </header>
                <main >
                    <div>
                        <p className="osName">{os}</p>
                    </div>
                </main>
                <footer className={style.footreWrapper}>
                    <button className={style.button} onClick={addGame}>Add</button>
                    <button className={style.button} onClick={seeMoreInfo}>See more</button>
                    <button className={style.button}>Reviews</button>
                </footer>
                <header className={style.platformWrapper}>
                    {platformName.map(x =>
                        <Platfrom key={x.platform.id} name={x.platform.name} />)}
                </header>
            </div>
        </div>


    )
}

export default Populate;
