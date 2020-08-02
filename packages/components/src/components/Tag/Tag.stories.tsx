import React from 'react'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { Tag } from './Tag'

export default {
    title: 'Tag',
    decorators: [withKnobs]
}

export const Default = () => (
    <Tag
        appearance={select('appearance',
            ['default', 'inprogress', 'moved', 'negative', 'success'], 'inprogress')}
        bold={boolean('bold', false)}
    >
        {text('content', 'Awesome')}
    </Tag>)
