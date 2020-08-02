import React from 'react'
import { IconButton } from './IconButton'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions';
import { icons } from '../Icon/Icon';
import { IconNames } from '../Icon/types';

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