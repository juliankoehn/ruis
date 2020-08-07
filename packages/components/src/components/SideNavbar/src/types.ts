import { IconNames } from '../../Icon/types';

export type ButtonWithTooltipProps = {};

export type NavItem = {
  label: string;
  to: string;
  icon: IconNames;
};

export type SideNavbarProps = {
  items: NavItem[];
  footer?: NavItem[];
};
