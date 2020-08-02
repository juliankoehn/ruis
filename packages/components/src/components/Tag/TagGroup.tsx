import { TagGroupProps } from './types'
import React from 'react'
import tokens from '@ruids/tokens'

export class TagGroup extends React.PureComponent<TagGroupProps> {
    render() {
        const { children } = this.props
        return (
            <div
                css={{
                    margin: `-${tokens.spacing2} 0 0 -${tokens.spacing2}`,
                    '> *': {
                        marginTop: tokens.spacing2,
                        marginLeft: tokens.spacing2
                    }
                }}
            >
                {children}
            </div>
        )
    }
}