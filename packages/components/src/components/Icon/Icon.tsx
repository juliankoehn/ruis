import React from 'react'
import { IconProps, SVGIcon, defaultProps } from './types'
import cn from 'classnames'

export class Icon extends React.Component<IconProps> {
    static defaultProps = defaultProps

    render() {
        const {
            className,
            icon,
            rotate,
            style,
            componentClass: Component,
            ...props
        } = this.props

        const classes = cn(className)

        const styles = rotate ? { transform: `rotate(${rotate}deg)`, ...style } : style;

        const isSvgIcon = typeof icon === 'object' && icon.id && icon.viewBox;

        if (isSvgIcon) {
            const svgIcon = icon as SVGIcon
            return (
                <Component {...props} className={classes} style={styles}>

                </Component>
            )
        }

        return <Component {...props} className={classes} style={styles} />
    }
}