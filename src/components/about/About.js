
import { useEffect, useState } from 'react'
import style from './About.module.css'

function About() {

    const apiKey = '0bb3c776352a48b9a0a4fb7ad3821b6c'
    let imageUrl = `https://api.rawg.io/api/platforms?key=${apiKey}`

    const [image, setImage] = useState([]);

   async function backgImageProvider() {

       await fetch(imageUrl)
            .then(res => res.json())
            .then(res => setImage(res.results[0].image_background))
    }
    console.log(image)
    useEffect(() => {

        backgImageProvider()

    }, [])



    return (
        <div className={style.aboutWrapper}>
                <img className={style.imageStyle} src={image} />
            <div className={style.header}>
                <h2>RawG public API</h2>
            </div>
            <ul className={style.listItemsWrapper}>
                <li className={style.listItems}><a href="https://github.com/NickDimitrov702" target="_blank">GitHub</a></li>
                <li className={style.listItems}><a href="https://www.linkedin.com/in/nikolay-dimitrov-434447159/" target="_blank">Linked in</a></li>
                <li className={style.listItems}><a href="https://rawg.io/" target="_blank">RAWG</a></li>
            </ul>
            <section className={style.descriptionWrapper}>
                <h2>Description</h2>
                <p>This is a demo web-app, you can find a lot of your favorite games and developers.
                    The app is using RAWG public API to pull data, as well as firebase Firestore to store user data.
                    You can sign-up with a demo e-mail and password and log-in with them.
                </p>
            </section>
        </div>
    )
}

export default About