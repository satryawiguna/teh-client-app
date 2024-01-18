import {FC} from "react";
import moment from "moment-timezone";

type LoginBottomNavigationPropType = {
    t: (key: any) => any
}

const AuthBottomNavigation: FC<LoginBottomNavigationPropType> = ({
                                                                     t
                                                                 }) => {
    return (<div className="flex dark:text-white bg-gray-50 dark:bg-gray-900 text-sm justify-center pb-5">
        {`${t('label.version')} ${import.meta.env.VITE_APP_NAME} ${import.meta.env.VITE_APP_VERSION}`}{` `}&copy;{` `}{moment().format('YYYY')}
    </div>)
}

export default AuthBottomNavigation
