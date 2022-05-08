import { doc, collection, setDoc, addDoc, arrayUnion } from "firebase/firestore";
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
import { Notifications } from 'react-push-notification'
import addNotification from 'react-push-notification';

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
    const [screenShots,setScreenshots] = useState([])
    const { currentUser } = useAuth()
    let string = []

  
    // For add game need to create a Button component so it can be passed to all other components. 
    // Create event in button component, an event that will take the data from this.component
    const addGame = (e, data) => {
        e.preventDefault()
        let targetTemplateData = e.target.parentElement.parentElement
        let gameName = targetTemplateData.children[0]
        let osName = targetTemplateData.children[3].innerText.split('\n').join('/ ').split('/ ')
        let screenShots = [...targetTemplateData.children[1].children[0].children[0].children[2].children[0].children]
        let gameDetails = {}
        let image = e.target.parentElement.parentElement.querySelector('header').querySelector('.slider-wrapper').querySelector('ul').querySelectorAll('li img')
        let imageArray = Array.from(image)
        let imagesToPass = []
        imageArray.map(x => {return imagesToPass.push(x.currentSrc)})
        let screenshotsData;


        
        console.log(imagesToPass)
        // console.log(targetTemplateData.children[1].children[0].children[0].children[2].children[0].children)

        osName.map(x => {
            let empty = []

            if (x === '') {
                empty.push(x)
            } else {
                string.push(x)
            }

        })


        gameDetails = {
            name: gameName.innerText,
            os: string,
            img:imagesToPass
        }



        const gameRef = collection(db, `${currentUser.email}`,)

        setDoc(doc(gameRef, `${id}`), {
            name: gameDetails.name,
            os: arrayUnion(...gameDetails.os),
            id: id,
            img:arrayUnion(...gameDetails.img)

        }, { os: true }, { merge: false });

       

    }

    function seeMoreInfo(e) {
        e.preventDefault()
        let platformsDetailsElement = e.target.parentElement.parentElement.children[3]

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

    return (
        <div className={style.gameTemplateComponentWrapper} >
            <div className={style.gameTempalteWrapper} >
                <div className='gameName' id={style.gameName}>
                    <p>{name}</p>
                </div>
                <header className={style.imageSlideShowWrapper}>
                    <Carousel showThumbs={false}>
                        {screenshots.map(x => <Screenshots key={x.id} image={x.image} />)}
                    </Carousel>
                </header>
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
