import {FC} from "react";
import moment from "moment-timezone";

type AdminBottomNavigationPropType = {
    t: (key: any) => any
}

const AdminBottomNavigation: FC<AdminBottomNavigationPropType> = ({
                                                                      t
                                                                  }) => {
    return (<div className="flex dark:text-white dark:bg-gray-900 text-sm justify-end p-3">
        {`${t('label.version')} ${import.meta.env.VITE_APP_NAME} ${import.meta.env.VITE_APP_VERSION}`}{` `}&copy;{` `}{moment().format('YYYY')}
    </div>)
}

export default AdminBottomNavigation
