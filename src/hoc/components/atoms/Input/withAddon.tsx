import {ComponentType, FC, ReactNode} from "react";
import {IconPosition} from "../../../../types/common/IconPosition";

type WithAddonPropsType = {
    iconAddon: ReactNode
    iconPositionAddon?: undefined | IconPosition
}

const withAddon = <T extends object>(OriginalComponent: ComponentType<T>) => {
    const WithAddon: FC<WithAddonPropsType & any> = ({
                                                         iconAddon,
                                                         iconPositionAddon,
                                                         ...props
                                                     }) => {

        if (!iconPositionAddon)
            iconPositionAddon = 'left'

        if (props.className)
            props = {
                ...props,
                className: iconPositionAddon === 'left' ? `${props.className} with-addon-left` : `${props.className} with-addon-right`
            }

        return (<div className="flex">
            {iconAddon && <span
                className={`inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 ${iconPositionAddon === 'left' ? `rounded-e-md` : `rounded-s-md`} dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600`}>
                {iconAddon}
            </span>}
            <OriginalComponent {...props} />

        </div>)
    }

    return WithAddon
}

export default withAddon
