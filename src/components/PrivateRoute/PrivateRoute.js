import {Navigate, Outlet} from 'react-router-dom'
import {UserAuth} from "../Login/AuthContext/AuthContext";

function PrivateRoute() {
    const {user} = UserAuth();

    return user ? <Outlet/> : <Navigate to="/login"/>;
}

export default PrivateRoute