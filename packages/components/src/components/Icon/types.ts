import { StandardProps, TypeAttributes } from '../@types/common'
import { icons } from './Icon'

export type IconNames = keyof typeof icons
export type IconSize = 'tiny' | 'small' | 'medium' | 'large'

export const defaultProps = {
    size: 'small',
    testId: 'ruids-icon'
}


export type IconProps = {
    appearance?: 'primary' | 'positive' | 'negative' | 'warning' | 'white' | 'black'
    /** Icon name */
    icon: IconNames
    size?: IconSize
    /** Rotate the icon */
    rotate?: number
    /** Set SVG style when using custom SVG Icon */
    svgStyle?: React.CSSProperties
    testId?: string
    onClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
    role?: string
} & typeof defaultProps