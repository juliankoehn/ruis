import React from 'react'
import styled from '@emotion/styled'

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

const StyledGroup = styled.div({
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'middle',

    '> *': {
        position: 'relative',
        float: 'left',
        
    },
    // we have to remove radius of our children
    '> *:first-child': {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
    },
    '> *:last-child': {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
    },
    '> *:not(:first-child):not(:last-child)': {
        borderRadius: 0,
    }
})

export const ButtonGroup = React.forwardRef((props: ButtonGroupProps, ref: React.Ref<HTMLDivElement>) => {
    const {
        children,
        ...rest
    } = props
    
    return (
        <StyledGroup
            {...rest}
            role="group"
            ref={ref}
        >
            {children}
        </StyledGroup>
    )
})