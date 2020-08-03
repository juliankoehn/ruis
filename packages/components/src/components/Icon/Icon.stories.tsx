import React from 'react'
import { Icon } from './Icon'
import { withKnobs, select } from '@storybook/addon-knobs'
import { IconNames } from './types'
import { icons } from './icons'

export default {
    title: 'Icon',
    decorators: [withKnobs]
}

const iconNames: IconNames[] = []
for (let k in icons) iconNames.push(k as any)

export const Default = () => {
    return (
        <Icon
            icon={select('icon', iconNames, 'chevron_down')}
            size={select('size', ['tiny', 'small', 'medium', 'large', ], 'small')}
            appearance={select('appearance', ['black','primary', 'positive', 'warning', 'white'], 'black')}
        />
    )
}