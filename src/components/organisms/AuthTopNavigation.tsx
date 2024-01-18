import {FC, lazy} from "react";

type LoginTopNavigationPropType = {
    t: (key: any) => any;
    i18n: unknown;
}

const DarkModeToggle = lazy(() => import("../molecules/DarkModeToggle"));
const LanguageSelector = lazy(() => import("../molecules/LanguageSelector"));

const AuthTopNavigation: FC<LoginTopNavigationPropType> = ({t, i18n}) => {
    return <nav className="top-nav-wrapper-mobile bg-gray-50 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-row-reverse items-center mx-auto p-4 gap-x-2">
            <DarkModeToggle/>
            <LanguageSelector t={t}
                              i18n={i18n}/>
        </div>
    </nav>
}

export default AuthTopNavigation
