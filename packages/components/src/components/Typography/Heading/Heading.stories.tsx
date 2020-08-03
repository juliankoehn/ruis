import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { Heading } from './Heading'
import { HeadingTypes } from './types'

export default {
    title: 'Typography/Heading',
    decorators: [withKnobs]
}

const HeadingSizes: HeadingTypes[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

export const Default = () => {
    return (
        <div>
            {HeadingSizes.map(size => (
                <Heading is={size}>Heading {size}</Heading>
            ))}
        </div>
        
    )
}
