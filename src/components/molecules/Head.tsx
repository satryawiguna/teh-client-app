import {FC, ReactNode} from "react";
import {Helmet} from "react-helmet";

type HeadProp = {
    t: (key: any) => any
    title: string
    description: string
    children: ReactNode
};

const Head: FC<HeadProp> = ({
                                title,
                                description,
                                children
                            }) => {
    return (
        <Helmet>
            <meta name="title" content={title}/>
            <meta name="description" content={description}/>
            <meta name="og:title" content={title}/>
            <meta name="og:description" content={description}/>
            <link rel="icon" type="image/x-icon" href="src/components/molecules/Head"/>
            {children}
        </Helmet>
    );
};

export default Head;
