import {lazy, Suspense, useEffect, useRef} from "react";
import {fetchGlobal} from "./utils/store/reducers/globalSlice";
import {useSelector} from "react-redux";
import LoadingBar, {LoadingBarRef} from "react-top-loading-bar";
import {ToastContainer} from "react-toastify";
import {GuardConfigProvider, GuardedRoute, GuardedRoutes, GuardProvider} from "react-router-guarded-routes";
import {useTranslation} from "react-i18next";
import {Navigate} from "react-router-dom";
import PrivateRoutes from "./routes/PrivateRoute";
import "react-toastify/dist/ReactToastify.css";

const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const ForbiddenPage = lazy(() => import("./pages/ForbiddenPage"));
const PublicRoutes = lazy(() => import("./routes/PublicRoute"));
const PageLoader = lazy(() => import("./components/molecules/PageLoader"));
const Head = lazy(() => import("./components/molecules/Head"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const ForgotPasswordPage = lazy(() => import("./pages/ForgotPasswordPage"));


const App = () => {
    const {title, description, isLoading, lang, isDark} = useSelector(fetchGlobal)

    const inputRef = useRef<LoadingBarRef>(null!)
    const {t, i18n} = useTranslation()

    useEffect(() => {
        if (i18n)
            i18n.changeLanguage(lang).then(r => console.log(r));
    }, [i18n])

    useEffect(() => {
        if (isLoading) {
            inputRef.current?.continuousStart();
        } else {
            inputRef.current?.complete();
        }
    }, [isLoading]);

    return (<Suspense fallback={<PageLoader t={t}/>}>
        <Head t={t}
              title={title}
              description={description}>
            <title>{title}</title>
        </Head>
        <LoadingBar color="#f11946"
                    ref={inputRef}/>
        <ToastContainer position="top-right"
                        autoClose={5000}
                        closeOnClick
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme={isDark ? `dark` : `light`}
                        transition: Bounce/>
        <GuardConfigProvider>
            <GuardProvider>
                <GuardedRoutes>
                    <GuardedRoute element={<PublicRoutes/>}>
                        <GuardedRoute path="/" element={<Navigate to="/login"/>}/>
                        <GuardedRoute path="/login" element={<LoginPage t={t}/>}/>
                        <GuardedRoute path="/forgot-password" element={<ForgotPasswordPage t={t}/>}/>
                        <GuardedRoute path="*" element={<Navigate to="/404"/>}/>
                    </GuardedRoute>
                    <GuardedRoute element={<PrivateRoutes/>}>
                        <GuardedRoute path="/admin/" element={<Navigate to="/admin/dashboard"/>}/>
                        {/*<GuardedRoute path="/admin/dashboard" element={<DashboardPage t={t}/>}/>*/}
                        <GuardedRoute path="/admin/*" element={<Navigate to="/404"/>}/>
                    </GuardedRoute>
                    <GuardedRoute path="/404" element={<NotFoundPage t={t}/>}/>
                    <GuardedRoute path="/403" element={<ForbiddenPage t={t}/>}/>
                </GuardedRoutes>
            </GuardProvider>
        </GuardConfigProvider>
    </Suspense>)
}

export default App
