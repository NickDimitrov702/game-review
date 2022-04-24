import style from './Platform.module.css'


function Platfrom({
    name
}) {

    return (
        <div className={style.platformWrapper}>
                <p>{name}</p>
        </div>
    )
}

export default Platfrom