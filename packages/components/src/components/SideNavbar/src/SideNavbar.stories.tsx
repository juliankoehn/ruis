import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { SideNavbar } from './SideNavbar';
import { Icon } from '../../Icon';
import { NavItem } from './types';

export default {
  title: 'Navigation/SideNavbar',
  decorators: [withKnobs],
};

const dummyNavigationItems: NavItem[] = [
  {
    label: 'Components',
    to: '/components',
    icon: 'collection',
  },
  {
    label: 'CSS',
    to: '/css',
    icon: 'adjustments',
  },
];

export const Default = () => <SideNavbar items={dummyNavigationItems} />;
