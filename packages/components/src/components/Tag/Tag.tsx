import React from 'react'
import { TagProps, defaultProps } from './types'
import { getTagStyles } from './styles'
import { Icon } from '../Icon'

export class Tag extends React.PureComponent<TagProps> {
    static defaultProps = defaultProps

    render() {
        const {
            children,
            componentClass: Component,
            onClose,
            closeable,
            appearance,
            ...rest
        } = this.props

        return (
            <Component
                {...rest}
                css={getTagStyles(this.props)}
            >
                <span>{children}</span>
                {closeable && (
                    <Icon icon="x" size="tiny" onClick={(e) => onClose(e)} role="button" />
                )}
            </Component>
        )
    }
}