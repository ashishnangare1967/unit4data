
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoutes = ({children}) => {

    const isAuth = useSelector(state=> state.authReducer.isAuth)
    const location = useLocation()
 
    return isAuth ? children : <Navigate state={location.pathname} to ="/login"/>
};


export default PrivateRoutes

