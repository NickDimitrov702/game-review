import { React } from 'react'
import { Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { useAuth } from '../../context/AuthContext'
// Wrapper for our current rout
export default function PublicRout({ component: Component, restricted, ...rest }) {
    const { currentUser } = useAuth()
    return (
        <Route{...rest}
            render={props => {
                return currentUser && restricted ? <Redirect to='/' /> : <Component {...props} /> 
            }}>
        </Route>

    )
}