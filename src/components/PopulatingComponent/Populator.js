import React from "react";
import { Fragment } from 'react'
import style from './Populate.module.css'

function Populate({
    name,
    id,
    slug,
    image,
    os
}) {

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
                        {name}
                    </div>
                    <div>
                        <p>{os}</p>
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

export default Populate;