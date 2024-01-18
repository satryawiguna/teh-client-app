import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {PersistGate} from "redux-persist/integration/react";
import {QueryClient, QueryClientConfig, QueryClientProvider} from "@tanstack/react-query";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {persistor, store} from "./utils/store";
import {setHeaderAuthorization} from "./utils/HttpClient";
import "./index.scss";
import "./utils/i18Next";
import './utils/Help'
import "flowbite";

const config: QueryClientConfig = {
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: false,
            staleTime: 60 * 1000
        }
    }
}

const queryClient = new QueryClient(config);

const handleOnBeforeLift = () => {
    if (store.getState().auth.accessToken &&
        store.getState().auth.accessToken !== null &&
        store.getState().auth.isLogged) {
        setHeaderAuthorization(store.getState().auth.accessToken)
    }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} onBeforeLift={handleOnBeforeLift}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </QueryClientProvider>
        </PersistGate>
    </Provider>
)
