
import style from './LogIn.module.css'

function LogIn() {

    return (
        <div className={style.formWrapper}>
            <form className={style.loginFormWrapper}>
                <div className={style.emailInputWrapper}>
                    <label className={style.lable}>Enter email</label>
                    <input className={style.input} type="email" value="user@email.com"></input>
                </div>
                <div className={style.passwordInputWrapper}>
                    <label className={style.lable}>Enter password</label>
                    <input className={style.input} type="password" value=""></input>
                </div>
            </form>
        </div>


    )
}

export default LogIn