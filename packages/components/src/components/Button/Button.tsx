import { ButtonProps } from './types'
import React from 'react'
import { getButtonStyles, getLabelStyles } from './styles'
import { Icon } from '../Icon'
import { Spinner } from '../Spinner'
import { css } from '@emotion/core'

export const Button = React.forwardRef((props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    const {
        buttonType = 'primary',
        className,
        children,
        componentClass: Component = 'button',
        disabled,
        loading,
        iconBefore,
        indicateDropdown,
        type = 'button',
        ...rest
    } = props

    const loadingAppearance = 
        buttonType == 'muted' || buttonType == 'naked' ? false : true

    const loadingSize =
        props.size == 'small' ? 'small' : 'medium'

    return (
        <Component
            css={getButtonStyles(props)}
            className={className}
            type={type}
            ref={ref}
            disabled={disabled}
            {...rest}
        >
            {loading && (
                <div
                    css={css({
                        display: 'flex',
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                    })}
                >
                    <Spinner size={loadingSize} invertColor={loadingAppearance} />
                </div>
            )}
            {iconBefore && (
                <span
                    css={css({
                        display: 'flex',
                        alignItems: 'center',
                        opacity: loading ? 0 : 1
                    })}
                >
                    <Icon
                        icon={iconBefore}
                    />
                </span>
            )}
            {children && (
                <span
                    css={getLabelStyles(props)}
                >
                    {children}
                </span>
            )}
            
            {indicateDropdown && (
                <span
                    css={css({
                        display: 'flex',
                        alignItems: 'center',
                        opacity: loading ? 0 : 1
                    })}
                >
                    <Icon
                        icon="chevron_down"
                    />
                </span>
            )}
        </Component>
    )
})

