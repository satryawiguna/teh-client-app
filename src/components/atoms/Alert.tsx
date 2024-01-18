import React, {FC, ReactNode} from "react";
import {AlertType} from "../../types/common/AlertType";

type AlertProp = {
    t: (key: any) => any
    type?: AlertType
    className?: string
    icon?: ReactNode
    title?: string
    message: any
    dismiss?: boolean
}

const Alert: FC<AlertProp> = ({
                                  t,
                                  type = 'danger',
                                  className,
                                  icon,
                                  title,
                                  message,
                                  dismiss,
                              }) => {
    // Functions
    const extractAlertClassName = (type: AlertType = "danger") => {
        let alertClassName

        const iconClassName = 'icon'
        const dismissClassName = 'dismiss'

        switch (type) {
            case 'info-accent':
                alertClassName = 'alt-info bordered-accent'
                break
            case 'success-accent':
                alertClassName = 'alt-success bordered-accent'
                break
            case 'warning-accent':
                alertClassName = 'alt-warning bordered-accent'
                break
            case 'danger-accent':
                alertClassName = 'alt-danger bordered-accent'
                break

            case 'info-border':
                alertClassName = 'alt-info bordered-alert'
                break
            case 'success-border':
                alertClassName = 'alt-success bordered-alert'
                break
            case 'warning-border':
                alertClassName = 'alt-warning bordered-alert'
                break
            case 'danger-border':
                alertClassName = 'alt-danger bordered-alert'
                break

            case 'info':
                alertClassName = 'alt-info default'
                break
            case 'success':
                alertClassName = 'alt-success default'
                break
            case 'warning':
                alertClassName = 'alt-warning default'
                break
            case 'danger':
            default:
                alertClassName = 'alt-danger default'
                break
        }

        return {
            alertClassName,
            iconClassName,
            dismissClassName
        }
    }

    const {alertClassName, iconClassName, dismissClassName} = extractAlertClassName(type)

    return (<div id="message_alert"
                 className={`${alertClassName} ${className}`}
                 role="alert">
        {icon && icon}
        <span className="sr-only">Info</span>
        <div className="ms-3 text-sm font-medium">
            {title && <h3 className="font-bold">{t(`${title}`)}</h3>}
            {message && <div className="flex flex-col">
                {message.hasOwnProperty('errors') && Array.isArray(message.errors) ? message.errors.map((item: string, index: number) =>
                        <span key={index}>{`${t(item)}`}</span>) :
                    (typeof message.errors === "object") ? Object.keys(message.errors).forEach((item: string, index: number) =>
                        <span key={index}>{`${t(message.errors[item])}`}</span>) : ''}

                {message.hasOwnProperty('error') && typeof message.error === "string" ?
                    <span>{t(message.error)}</span> : ''}
            </div>}
        </div>
        {dismiss && <button id="dismissing_message_alert"
                            type="button"
                            className={dismissClassName}
                            data-dismiss-target="#message_alert"
                            aria-label="Close">
            <span className="sr-only">Dismiss</span>
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
            </svg>
        </button>}
    </div>)
}

export default Alert
