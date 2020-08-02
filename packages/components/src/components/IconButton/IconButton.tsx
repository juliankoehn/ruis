import { Button } from '../Button';
import React from 'react';
import { IconButtonProps } from './types';

export class IconButton extends React.Component<IconButtonProps> {
    render() {
        const { children, icon, ...rest } = this.props

        return (
                <Button
                    {...rest}
                    iconBefore={icon}
                >
                    {children}
                </Button>
        )
    }
}