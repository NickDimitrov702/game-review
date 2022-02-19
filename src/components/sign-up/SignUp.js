import style from './SignUp.module.css'
import { useRef, useState } from 'react'
import { AuthProvider, useAuth } from '../../context/AuthContext.js'

function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup, currentUser } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    // Async function since we have try catch, that is using async event within the Singup
    async function handleSubmit(e) {
        e.preventDefault()
        console.log(emailRef.current.value)
        // Validations for passwrods
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            // re-setting the Error
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)

        } catch {
            setError('Failed to create an account')
        }

        setLoading(false)
    }


    return (
        <AuthProvider>
            <div className={style.formWrapper}>
                {/* {error && alert("ALERT")} */}
                {JSON.stringify(currentUser)}
                <form className={style.signUpFormWrapper} onSubmit={handleSubmit}>

                    <label className={style.emailInputWrapper}>Enter email
                    </label>
                    <input ref={emailRef} className={style.input} type="email"></input>


                    <label className={style.passwordInputWrapper}>Enter password
                        <input ref={passwordRef} className={style.input} type="password" ></input>
                    </label>


                    <label className={style.passwordInputWrapper}>Confirm password
                        <input ref={passwordConfirmRef} className={style.input} type="password"></input>
                    </label>
                    <input type="submit" value="Submit" />

                    {/* Wont be able to re-submit our form since we are using the loading state, disabled={loading} the btn will be disabled */}
                </form>
            </div>

        </AuthProvider>


    )
}

export default SignUp