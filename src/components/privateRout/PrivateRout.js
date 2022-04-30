import { React } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { useAuth } from '../../context/AuthContext'
// Wrapper for our current rout
export default function PrivateRout({ component: Component, ...rest }) {
    const { currentUser } = useAuth()
    return (
            currentUser?<Outlet/>: <Navigate to='/log-in'/>
        // <Route{...rest}
        //     render={props => {
        //         return currentUser ? <Component {...props} /> : <Redirect to='/log-in' />
        //     }}>
        // </Route>

    )
}