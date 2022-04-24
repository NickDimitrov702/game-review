import style from './Screenshots.module.css'



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