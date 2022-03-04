import {Navigate, Route} from 'react-router-dom'
import Cookies from 'js-cookies'

const ProtectedRoute = props=>{


    const jwtToken = Cookies.get("jwt_token")

    if(jwtToken===undefined)
        return <Navigate to='/signup'/>
    
    return <Route {...props} />
}