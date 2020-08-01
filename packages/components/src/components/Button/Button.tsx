import { ButtonProps } from './types'
import React from 'react'
import { button } from './styles'

export const Button = React.forwardRef((props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    const {
        buttonType = 'primary',
        className,
        children,
        color,
        componentClass: Component = 'button',
        disabled,
        loading,
        type = 'button',
        ...rest
    } = props

    console.log(button)

    return (
        <Component
            css={button}
            type={type}
            ref={ref}
            disabled={disabled}
        >
            {children}
        </Component>
    )
})

