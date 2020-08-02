import React from 'react'
import { Spinner } from './Spinner'
import { withKnobs } from '@storybook/addon-knobs'
import { css } from '@emotion/core'

export default {
    title: 'Spinner',
    decorators: [withKnobs]
}

const sizes: any[] = ['xsmall', 'small', 'medium', 'large', 'xlarge', 80];

export const Default = () => (<Spinner />)

export const DifferentSizes = () => (
    <div
        css={css`
            display: flex;
            flex-wrap: wrap;
        `}
    >
        {sizes.map(size => (
            <div
                key={size}
                css={css`
                    display: flex;
                    flex-direction: column;
                    margin-left: 8px;
                    margin-right: 8px;
                    align-items: center;
                    justify-content: flex-end;
                `}
            >
                <span
                    css={css`
                        padding: 8px;
                    `}
                >
                    <Spinner size={size} />
                </span>
                {typeof size === 'number' ? (
                    <span>custom</span>
                ): <span>{size}</span>}
            </div>
        ))}
    </div>
)