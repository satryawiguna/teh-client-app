import {FC, ReactNode} from "react";
import {useTranslation} from "react-i18next";
import AdminTopNavigation from "../components/organisms/AdminTopNavigation";
import AdminBottomNavigation from "../components/organisms/AdminBottomNavigation";
import AdminSideNavigation from "../components/organisms/AdminSideNavigation";
import OTPModal from "../pages/admin/OTPModal";

type AdminLayoutProp = {
    children: ReactNode
}

const AdminLayout: FC<AdminLayoutProp> = ({children}) => {
    const {t, i18n} = useTranslation()

    return (<>
        <AdminTopNavigation t={t}
                            i18n={i18n}/>
        <AdminSideNavigation t={t}/>
        <OTPModal t={t}/>
        <main>
            <div className="p-4 sm:ml-64 bg-white dark:bg-gray-900 min-h-screen overflow-auto">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-16">
                    {children}
                </div>
            </div>
            <AdminBottomNavigation t={t}/>
        </main>
    </>)
}

export default AdminLayout
