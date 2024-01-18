import {Language} from "../types/Language";
import {Navigation} from "../types/common/Navigation";
import {DomainRole} from "../interfaces/common/DomainRole";
import {DomainPolicy} from "../interfaces/common/DomainPolicy";

export const ROLES: DomainRole = {
    SUPER_ADMINISTRATORS: "SuperAdministrators",
    ADMINISTRATORS: "Administrators",
    USERS: "Users",
    EXECUTIVES: "Executives",
    MANAGERS: "Managers",
    PROJECT_MANAGER: "ProjectManagers",
    ACCOUNT_MANAGERS: "AccountManagers",
    LOGISTIC_MANAGER: "LogisticManager",
    PRODUCERS: "Producers",
    TELESALES: "Telesales",
    LOGISTICS: "Logistics",
    STAFFS: "Staffs",
};

export const POLICIES: DomainPolicy = {
    MASTER_DATA_ENTRY_GROUP: "MasterDataEntryGroups",
    HUMAN_RESOURCE_GROUP: "HumanResourceGroups",
    FINANCE_MANAGEMENT_GROUP: "FinanceManagementGroups",
    EVENT_MANAGEMENT_GROUP: "EventManagementGroups",
    MARKETING_GROUP: "MarketingGroups",
    CLIENT_GROUP: "ClientGroups",
};

export const LANGUAGES: Array<Language> = [
    {id: 1, slug: "en", title: "English"},
    {id: 2, slug: "id", title: "Indonesia"}
];

export const NAVIGATION = (t: any): Array<Navigation> => {
    return [
        {
            id: 1,
            slug: "dashboard",
            title: t("menu.dashboard"),
            icon: (
                <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
            ),
            url: "/admin/dashboard"
        }
    ]
};
