import React from 'react'
import { IconProps, defaultProps } from './types'
import cn from 'classnames'
import { getIconStyles } from './styles'

export const icons = {
    'check': 'M5 13l4 4L19 7',
    'chevron_down': 'M19 9l-7 7-7-7',
    'heart': 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    'info': 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    'inbox': 'M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4',
    'refresh': 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    'reply': 'M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6',
}

export class Icon extends React.Component<IconProps> {
    static defaultProps = defaultProps

    render() {
        const {
            icon,
            rotate,
            svgStyle,
            testId,
            ...props
        } = this.props

        const iconPath = icons[icon]

        const styles = rotate ? { transform: `rotate(${rotate}deg)` } : undefined;

        return (
            <svg data-test-id={testId} {...props} style={styles}
                fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
                stroke="currentColor"
                css={{
                    ...getIconStyles(this.props)
                }}
            >
                <path d={iconPath} />
            </svg>
        )
    }
}