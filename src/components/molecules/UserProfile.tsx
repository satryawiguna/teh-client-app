import {FC, lazy, useCallback, useEffect, useState} from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {fetchAuth, logoutAction} from "../../utils/store/reducers/authSlice";
import {Dropdown, DropdownInterface, DropdownOptions} from "flowbite";
import {Avatar} from "flowbite-react";
import avatar from "../../assets/images/avatars/avatar.jpg";
import {BiPencil} from "react-icons/bi";
import {useShowClient} from "../../hooks";
import {errorDefault} from "../../hooks/useError";
import {splitCamelCase} from "../../utils/Help";

type UserProfilePropType = {
    t: (key: any) => any
}

const EditAvatarModal = lazy(() => import('../../pages/admin/user/EditAvatarModal'));

const UserProfile: FC<UserProfilePropType> = ({t}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {userInfo} = useSelector(fetchAuth)
    const {secondaryId, roles} = userInfo

    const roleSequence = ["SuperAdministrators", "Administrators", "Users"];

    //Modal
    const [editAvatarModal, setEditAvatarModal] = useState<string | undefined>();

    //Other
    const [, setDropDownMenu] = useState<DropdownInterface>()

    const {
        data: dataClient,
        isError: isErrorClient,
        error: errorClient
    } = useShowClient(secondaryId)

    useEffect(() => {
        const $targetEl: HTMLElement | null = document.getElementById("dropDownMenuTarget")
        const $triggerEl: HTMLElement | null = document.getElementById("dropDownMenuButton")

        const options: DropdownOptions = {
            placement: "bottom",
            triggerType: "click",
            offsetSkidding: 0,
            offsetDistance: 10,
            delay: 300,
        }

        setDropDownMenu(new Dropdown($targetEl, $triggerEl, options))
    }, [])

    useEffect(() => {
        if (isErrorClient)
            errorDefault(t, errorClient)
    }, [isErrorClient, errorClient])

    const handleOpenEditAvatar = useCallback(
        () => {
            setEditAvatarModal("open")
        },
        [editAvatarModal]
    )

    const handleCloseEditAvatar = useCallback(
        () => {
            setEditAvatarModal(undefined)
        },
        [editAvatarModal]
    )

    const findValueBasedOnSequence = (x: any, y: any) => {
        for (const value of x) {
            const filteredItems = y.filter((item: any) => item.name === value);

            if (filteredItems.length > 0) {
                return value
            }
        }

        return "User";
    }

    const handleLogout = () => {
        const LogoutSwal = withReactContent(Swal)

        LogoutSwal.fire({
            title: t("text.are_you_sure_?"),
            text: t("text.do_you_want_to_logout_from_system"),
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: t("text.yes_logout"),
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(logoutAction())

                navigate("/login", {replace: true})
            }
        })
    }

    return (<div className="w-full max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700 mb-10">
        <div className="flex justify-start px-4 pt-4">
            <button
                id="dropDownMenuButton"
                className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                type="button"
            >
                <span className="sr-only">Open dropdown</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
            </button>
            <div
                id="dropDownMenuTarget"
                className="z-10 hidden text-base list-none bg-white divide-y divide-gray-500 rounded-lg shadow w-44 dark:bg-gray-700"
            >
                <ul className="py-2">
                    <li>
                        <Link
                            to={"/admin/edit-profile"}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                            {t("menu.edit_profile")}
                        </Link>
                    </li>
                </ul>
                <a
                    href="#"
                    onClick={handleLogout}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                    {t("menu.log_out")}
                </a>
            </div>
        </div>
        <div className="flex flex-col items-center gap-1">
            <div className="relative group">
                <Avatar alt="avatar of account"
                        img={userInfo.profileImageUrl ?? avatar}
                        rounded bordered
                        size="lg"/>
                <div
                    className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity rounded-full"></div>
                <div
                    className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex inline-flex">
                        <a
                            className="cursor-pointer"
                            onClick={handleOpenEditAvatar}
                        >
                            <BiPencil/>
                        </a>
                    </div>
                </div>
            </div>
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white line-clamp-1">
                {userInfo.fullName}
            </h5>
            {secondaryId ? <span
                className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                            {dataClient?.result.positionName}
                        </span> : <span
                className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                            {splitCamelCase(findValueBasedOnSequence(roleSequence, roles))}
                        </span>}
        </div>
        {editAvatarModal !== undefined && (
            <EditAvatarModal
                t={t}
                editAvatarModal={editAvatarModal}
                handleCloseEditAvatar={handleCloseEditAvatar}
            />
        )}
    </div>)
}

export default UserProfile
