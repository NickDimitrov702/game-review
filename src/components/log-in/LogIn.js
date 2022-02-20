import { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AuthProvider, useAuth } from '../../context/AuthContext.js'
import style from './LogIn.module.css'

function LogIn() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, currentUser } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        

        try {
            // re-setting the Error
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
            
            // NOTE: In firebase password needs to be 6 or more charecters, e-mail needs to be with proper format.
        } catch {
            setError('Failed to create an account')
        }

        setLoading(false)
    }

    return (
        <div className={style.formWrapper}>
            <form className={style.loginFormWrapper} onSubmit={handleSubmit}>
                <div className={style.emailInputWrapper}>
                    <label className={style.lable}>Enter email</label>
                    <input ref={emailRef} className={style.input} type="email" ></input>
                </div>
                <div className={style.passwordInputWrapper}>
                    <label className={style.lable}>Enter password</label>
                    <input ref={passwordRef} className={style.input} type="password"></input>
                </div>
                <input className={style.submitBtn} type='submit' value='Log in'/>
                <span><Link to='/sign-up'>Sign Up</Link></span>
            </form>
        </div>


    )
}

export default LogIn