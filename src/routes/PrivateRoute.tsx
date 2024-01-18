import {useSelector} from "react-redux";
import {Navigate, Outlet} from 'react-router-dom';
import {fetchAuth} from "../utils/store/reducers/authSlice";
import {FC, lazy} from "react";

type PrivateRoutesProp = {}

const AdminLayout = lazy(() => import('../templates/AdminLayout'));

const PrivateRoutes: FC<PrivateRoutesProp> = () => {
    const {isLogged} = useSelector(fetchAuth)

    return isLogged ? (
        <AdminLayout>
            <Outlet/>
        </AdminLayout>
    ) : (
        <Navigate
            to={{
                pathname: `/login`
            }}
            replace
        />
    )
}

export default PrivateRoutes
