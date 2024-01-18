import {FC} from 'react';
import {Player} from '@lottiefiles/react-lottie-player';
import CyberSecurity from '../../assets/images/animes/cyber-security.json';

type PageLoaderProp = {
    t: (key: any) => any
}

const PageLoader: FC<PageLoaderProp> = () => {
    return (<div
        className="flex flex-col gap-4 items-center justify-center w-full h-screen border border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <Player autoplay loop
                src={CyberSecurity}
                style={{height: '300px', width: '300px'}}
        />
    </div>)
}

export default PageLoader
