import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { ParagraphTypes } from './types'
import { Paragraph } from './Paragraph'

export default {
    title: 'Typography/Paragraph',
    decorators: [withKnobs]
}

const paragraphTypes: ParagraphTypes[] = ['p', 'div', 'span']

export const Default = () => {
    return (
        <div>
            {paragraphTypes.map(size => (
                <Paragraph is={size}>Heading {size}</Paragraph>
            ))}
        </div>

    )
}
