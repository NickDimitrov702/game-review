import style from './Screenshots.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


function Screenshots({
    image,
}) {
    console.log(image)
    return (
            <div className={style.screenshotsWrapper}>
                <img className={style.imageStyle} src={image}></img>
            </div>
        
    )
}

export default Screenshots