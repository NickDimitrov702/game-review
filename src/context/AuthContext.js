import React, { useContext, useState, useEffect } from "react"
import { auth } from "../components/services/firebase/firebase"
// Setting the context from react
const AuthContext = React.createContext()

// We have access to Context through useAuth Hook.
export function useAuth() {
    return useContext(AuthContext)
}

// Using the authProvider so we can render the Context
export function AuthProvider({ children }) {
    // Using state to set the current user, by default there wont be any user
    const [currentUser, setCurrentUser] = useState()
    // This is the function that will sign-up the user, using firebase auth methods.
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
        // NOTE: In firebase password needs to be 6 or more charecters, e-mail needs to be with proper format.
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    useEffect(() => {
        // onAuthStChange returns a unsubscribe method that will automatically unsubscribe from the listener, that is why it 
        // is set a const unsubscribe. 
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])


    // we are storing value and this value will be dropped to AuthContext
    // the main reason is to store the currentUser
    const value = {
        currentUser,
        signup,
        login,
        logout
    }

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>

}