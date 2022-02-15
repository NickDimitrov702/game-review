import style from './SignUp.module.css'

function SignUp() {

    return (
        <form className={style.signUpFormWrapper}>
            <div className={style.emailInputWrapper}>
                <label className={style.lable}>Enter email
                </label>
                    <input className={style.input} type="email" value="user@email.com"></input>

            </div>
            <div className={style.passwordInputWrapper}>
                <label className={style.lable}>Enter password
                </label>
                    <input className={style.input} type="password" ></input>
            </div>
            <div className={style.passwordInputWrapper}>
                <label className={style.lable}>Confirm password</label>
                <input className={style.input} type="password" value=""></input>
            </div>
        </form>

    )
}

export default SignUp