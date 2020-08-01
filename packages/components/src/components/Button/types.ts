import { StandardProps, TypeAttributes } from '../@types/common';

export interface ButtonProps extends StandardProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** A button can have different appearances. */
    buttonType?: 'primary' | 'positive' | 'negative' | 'warning' | 'muted' | 'naked';

    /** A button can show it is currently the active user selection */
    active?: boolean;

    /** A button can have different sizes */
    size?: TypeAttributes.Size;

    /** A button can have different colors */
    color?: TypeAttributes.Color;

    /** Format button to appear inside a content bloc */
    block?: boolean;

    /** Providing a `href` will render an `<a>` element, _styled_ as a button */
    href?: string;

    /** A button can show a loading indicator */
    loading?: boolean;

    /** A button can show it is currently unable to be interacted with */
    disabled?: boolean;

    /** Called when the button is clicked. */
    onClick?: (event: React.SyntheticEvent) => void;

    /** Ripple after button click */
    ripple?: boolean;

    /** Defines HTML button type attribute */
    type?: 'button' | 'reset' | 'submit';
}