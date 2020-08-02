import React from 'react'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { Tag } from './Tag'
import { TagGroup } from './TagGroup'

export default {
    title: 'Tag',
    decorators: [withKnobs]
}

export const Default = () => (
    <Tag
        appearance={select('appearance',
            ['default', 'inprogress', 'moved', 'negative', 'success'], 'inprogress')}
        bold={boolean('bold', false)}
        closeable={boolean('closeable', true)}
    >
        {text('content', 'Awesome')}
    </Tag>)

export const Group = () => (
    <TagGroup>
        <Tag
            appearance={select('appearance',
                ['default', 'inprogress', 'moved', 'negative', 'success'], 'inprogress')}
            bold={boolean('bold', false)}
            closeable={boolean('closeable', true)}
        >
            {text('content', 'Awesome')}
        </Tag>
        <Tag
            appearance={select('appearance',
                ['default', 'inprogress', 'moved', 'negative', 'success'], 'inprogress')}
            bold={boolean('bold', false)}
            closeable={boolean('closeable', true)}
        >
            {text('content', 'Awesome')}
        </Tag>
        <Tag
            appearance={select('appearance',
                ['default', 'inprogress', 'moved', 'negative', 'success'], 'inprogress')}
            bold={boolean('bold', false)}
            closeable={boolean('closeable', true)}
        >
            {text('content', 'Awesome')}
        </Tag>
    </TagGroup>
)