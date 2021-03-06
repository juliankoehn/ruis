import React from 'react'

export const defaultProps = {
    componentClass: 'div',
    appearance: 'default',
    onClose: () => {}
}

export type TagProps = {
    appearance?: 'default' | 'inprogress' | 'moved' | 'negative' | 'success'
    /** font appearance is bold */
    bold?: boolean
    /** Whether to close */
    closeable?: boolean
    /** The content of the component */
    children?: React.ReactNode
    /** You can use a custom element type for this component */
    componentClass?: React.ElementType;
    /** Click the callback function for the Close button */
    onClose?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
} & typeof defaultProps

export type TagGroupProps = {
    children?: React.ReactNode
}