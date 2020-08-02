import { StandardProps, TypeAttributes } from '../@types/common';
import { IconNames } from '../Icon/types';

export interface ButtonProps extends StandardProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** A button can have different appearances. */
    buttonType?: TypeAttributes.Appearance;
    iconBefore?: IconNames | null

    /** A button can show it is currently the active user selection */
    active?: boolean;

    /** A button can have different sizes */
    size?: 'default' | 'small' | 'large'

    /** A button can show a loading indicator */
    loading?: boolean;

    /** A button can show it is currently unable to be interacted with */
    disabled?: boolean;
    indicateDropdown?: boolean
    block?: boolean

    /** Called when the button is clicked. */
    onClick?: (event: React.SyntheticEvent) => void;
    /** Defines HTML button type attribute */
    type?: 'button' | 'reset' | 'submit';
}