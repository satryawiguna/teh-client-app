import {useNavigate} from "react-router-dom";
import {FC} from "react";

type NotFoundPageProp = {
    t: (key: any) => any;
};

const NotFoundPage: FC<NotFoundPageProp> = ({t}) => {
    const navigate = useNavigate();

    const handleGoToRootPage = () => {
        navigate("/");
    };

    return (
        <section className="bg-white dark:bg-gray-900 ">
            <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
                <div>
                    <p className="text-sm font-medium text-blue-500 dark:text-blue-400">404 ERROR</p>
                    <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">{t('text.we_cant_find_that_page')}</h1>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">{t('text.sorry_the_page_you_are_looking_for_doesnt_exist_or_has_been_moved')}</p>
                    <div className="flex items-center mt-6 gap-x-3">
                        <button
                            className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
                            onClick={() => navigate(-2)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5 rtl:rotate-180"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                                />
                            </svg>

                            <span>{t("label.go_back")}</span>
                        </button>

                        <button
                            className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
                            onClick={handleGoToRootPage}
                        >
                            {t("label.take_me_home")}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFoundPage;
