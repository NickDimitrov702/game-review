import { useRef, useState } from 'react'
import { Link, useNavigate,Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from '../../context/AuthContext.js'
import Transitions from '../Transition/Transition.js'
import style from './LogIn.module.css'

function LogIn() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, currentUser } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            // re-setting the Error
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history('/') 
            
            // NOTE: In firebase password needs to be 6 or more charecters, e-mail needs to be with proper format.
        } catch {
            setError('Failed to create an account')
            console.alert({error})
        }

        setLoading(false)
    }

    return (
        <Transitions>
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
                    <input className={style.submitBtn} type='submit' value='Log in' />
                    <span><Link to='/sign-up'>Sign Up</Link></span>
                </form>
            </div>
        </Transitions>


    )
}

export default LogIn