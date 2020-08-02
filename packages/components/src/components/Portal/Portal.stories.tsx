import React, { useState } from 'react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { Button } from '../Button';
import { Portal } from './Portal';

export default {
    title: 'Portal',
    decorators: [withKnobs]
}

export const Default = () => {
    const [ isShown, setShown ] = useState(false)

    const handleToggle = () => {
        setShown(shown => !shown)
    }

    return (
        <div>
            <Button buttonType="muted" onClick={handleToggle}>Toggle</Button>
            <div style={{height: 10 }} />
            {isShown ? (
                <Portal>
                    <div style={{ height: 100, background: '#000', width: '100%' }}>Element</div>
                </Portal>
            ): null}
        </div>
    )
}