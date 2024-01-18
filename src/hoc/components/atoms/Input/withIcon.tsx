import {ComponentType, FC, ReactNode} from "react";
import {IconPosition} from "../../../../types/common/IconPosition";

type WithIconPropsType = {
    icon: ReactNode
    iconPosition?: undefined | IconPosition
}

const withIcon = <T extends object>(OriginalComponent: ComponentType<T>) => {
    const InputWithIcon: FC<WithIconPropsType & any> = ({
                                                            icon,
                                                            iconPosition,
                                                            ...props
                                                        }) => {
        if (!iconPosition)
            iconPosition = 'left'

        return (<div className="relative mb-6">
            {icon && <div
                className={`absolute inset-y-0 ${iconPosition === 'left' ? 'start-0 ps-3.5' : 'end-0 pe-3.5'} flex items-center pointer-events-none`}>
                {icon}
            </div>}
            <OriginalComponent {...props} />
        </div>);
    }

    return InputWithIcon
}

export default withIcon
