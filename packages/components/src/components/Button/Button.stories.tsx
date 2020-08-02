import React from 'react'
import { Button } from './Button'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions';
import { icons } from '../Icon/Icon';
import { IconNames } from '../Icon/types';

export default {
    title: 'Button',
    decorators: [withKnobs]
}

const iconNames: IconNames[] = []
for (let k in icons) iconNames.push(k as any)

export const Default = () => {
    const showIcon = boolean('ShowIcon', false)
    const iconName = select(
        'iconBefore',
        [...iconNames],
        'heart'
    )

    return (
        <Button
            size={select('size', ['small', 'large', 'default'], 'default')}
            iconBefore={showIcon ? iconName : undefined}
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
            disabled={boolean('disabled', false)}
            loading={boolean('loading', false)}
            indicateDropdown={boolean('indicateDropdown', false)}
            onClick={action('onClick')}
            onMouseEnter={action('onMouseEnter')}
            onMouseLeave={action('onMouseLeave')}
        >
            {text('Text', 'Embed entry')}
        </Button>
    )
}