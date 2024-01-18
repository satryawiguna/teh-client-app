import {FC, lazy, ReactNode} from "react";
import {useTranslation} from "react-i18next";

type LoginLayoutProp = {
    children: ReactNode
}

const AuthTopNavigation = lazy(() => import("../components/organisms/AuthTopNavigation"));
const AuthBottomNavigation = lazy(() => import("../components/organisms/AuthBottomNavigation"));

const AuthLayout: FC<LoginLayoutProp> = ({children}) => {
    const {t, i18n} = useTranslation();

    return (
        <>
            <AuthTopNavigation t={t}
                               i18n={i18n}/>
            <main>
                {children}
            </main>
            <AuthBottomNavigation t={t}/>
        </>
    )
}

export default AuthLayout
