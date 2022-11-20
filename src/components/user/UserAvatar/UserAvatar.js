import avatar from '../../../resources/Sample1.jpg'
import style from '../UserAvatar/Avatar.module.css'
function UserAvatar() {
     return (
        <div className={style.avatarWrapper}>
            <img className={style.avatar} src={avatar}></img>
        </div>
     )
}


export default UserAvatar