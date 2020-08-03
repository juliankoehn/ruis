import React from 'react'
import { IconButton } from './IconButton'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import { IconNames } from '../Icon/types';
import { icons } from '../Icon/icons';

export default {
    title: 'Button/IconButton',
    decorators: [withKnobs]
}

const iconNames: IconNames[] = []
for (let k in icons) iconNames.push(k as any)

export const Default = () => {

    return (
        <IconButton
            icon={select(
                'iconBefore',
                [...iconNames],
                'heart'
            )}
            buttonType={select(
                'buttonType',
                {
                    muted: 'muted',
                    primary: 'primary',
                    positive: 'positive',
                    negative: 'negative',
                    naked: 'naked',
                    warning: 'warning',
                },
                'muted',
            )}
        >
            {text('Text', '')}
        </IconButton>
    )
}