import {FC, lazy} from "react";
import {Navigate, Outlet} from 'react-router-dom';
import {useSelector} from "react-redux";
import {fetchAuth} from "../utils/store/reducers/authSlice";

type PublicRoutesProp = {}

const LoginLayout = lazy(() => import('../templates/AuthLayout'));

const PublicRoutes: FC<PublicRoutesProp> = () => {
    const {isLogged} = useSelector(fetchAuth)

    return !isLogged ? (<LoginLayout>
        <Outlet/>
    </LoginLayout>) : (<Navigate
        to={{pathname: '/admin/dashboard'}}
        replace/>)
}

export default PublicRoutes
