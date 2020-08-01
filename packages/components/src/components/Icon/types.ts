import { StandardProps } from '../@types/common'

export type IconNames = 'error'

export interface SVGIcon {
    viewBox: string;
    id: string;
}

export const defaultProps = {
    componentClass: 'i'
}


export type IconProps = {
    /** Icon name */
    icon: IconNames | SVGIcon
    /** Rotate the icon */
    rotate?: number
    /** Set SVG style when using custom SVG Icon */
    svgStyle?: React.CSSProperties
} & typeof defaultProps & StandardProps