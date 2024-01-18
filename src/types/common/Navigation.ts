import {ReactNode} from "react";

export type Navigation = {
    id: number;
    slug: string;
    title: string;
    icon?: undefined | ReactNode;
    url?: undefined | string;
    child?: undefined | Array<Navigation>
};
