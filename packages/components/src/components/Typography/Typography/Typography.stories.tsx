import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { Typography } from './Typography'

export default {
    title: 'Typography',
    decorators: [withKnobs]
}


export const Default = () => (
    <Typography>
        children
    </Typography>
)
