import React from 'react'
import { IconProps, defaultProps } from './types'
import { getIconStyles } from './styles'
import { icons } from './icons'


export class Icon extends React.Component<IconProps> {
    static defaultProps = defaultProps

    render() {
        const {
            icon,
            rotate,
            svgStyle,
            testId,
            onClick,
            role,
            ...props
        } = this.props

        const iconPath = icons[icon]

        const styles = rotate ? { transform: `rotate(${rotate}deg)` } : undefined;

        return (
            <svg data-test-id={testId} {...props} style={styles}
                fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"
                stroke="currentColor"
                css={{
                    ...getIconStyles(this.props)
                }}
                onClick={onClick}
                role={role}
            >
                <path d={iconPath} />
            </svg>
        )
    }
}