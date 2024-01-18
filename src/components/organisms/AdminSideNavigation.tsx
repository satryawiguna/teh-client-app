import {FC} from "react";
import UserProfile from "../molecules/UserProfile";
import {NAVIGATION} from "../../utils/Constant";
import {Navigation} from "../../types/common/Navigation";
import {Link} from "react-router-dom";
import {Disclosure} from "@headlessui/react";
import {IoIosArrowForward} from "react-icons/io";

type AdminSideNavigationPropType = {
    t: (key: any) => any;
}

const AdminSideNavigation: FC<AdminSideNavigationPropType> = ({t}) => {
    return (<aside id="logo-sidebar"
                   className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
                   aria-label="Sidebar"
    >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <UserProfile t={t}/>
            {NAVIGATION(t).map(({
                                    // id,
                                    // slug,
                                    title,
                                    icon,
                                    url,
                                    child,
                                    // ...props
                                }: Navigation, index: number) => {
                if (child)
                    return <li key={index}>
                        <Disclosure>
                            {({open}) => (
                                <>
                                    <Disclosure.Button
                                        className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                        {icon}
                                        <span className="flex-1 ml-3 text-left whitespace-nowrap">
                                                  {title}
                                                </span>
                                        <IoIosArrowForward
                                            className={`${
                                                open ? "rotate-90 transform" : ""
                                            } flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white h-5 w-5`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <AdminSideNavigationChild t={t} child={child}/>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </li>

                return <li key={index}>
                    <Link
                        to={url || ''}
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        {icon}
                        <span className="flex-1 ml-3 text-left whitespace-nowrap">
                                    {title}
                                </span>
                    </Link>
                </li>
            })}
        </div>
    </aside>)
}

type AdminSideNavigationChildPropType = {
    t: (key: any) => any,
    child: Array<Navigation> | undefined
}

const AdminSideNavigationChild: FC<AdminSideNavigationChildPropType> = ({t, child}) => {
    return <ul className="py-2 space-y-2">
        {child?.map(({
                         // id,
                         // slug,
                         title,
                         icon,
                         url,
                         child,
                         // ...props
                     }: Navigation, index: number) => {
            if (child)
                return <li key={index}>
                    <Disclosure>
                        {({open}) => (
                            <>
                                <Disclosure.Button
                                    className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                    {icon}
                                    <span className="flex-1 ml-3 text-left whitespace-nowrap">
                                      {title}
                                    </span>
                                    <IoIosArrowForward
                                        className={`${
                                            open ? "rotate-90 transform" : ""
                                        } flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white h-5 w-5`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="text-sm text-gray-500">
                                    <AdminSideNavigationChild t={t} child={child}/>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </li>

            return <li key={index}>
                <Link
                    to={url || ''}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                    <span className="flex-1 ml-3 text-left whitespace-nowrap">
                        {title}
                    </span>
                </Link>
            </li>
        })}
    </ul>
}

export default AdminSideNavigation
