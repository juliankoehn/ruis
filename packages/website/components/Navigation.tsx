// re-exporting
import React from 'react';
import { SideNavbar } from '@ruids/components/dist/components/SideNavbar';
import { NavItem } from '@ruids/components/dist/components/SideNavbar/src/types';

const navItems: NavItem[] = [
  {
    label: 'Components',
    to: '/components/overview',
    icon: 'library',
  },
];

// construct navigation

export const Navigation: React.FC = () => {
  return <SideNavbar items={navItems} />;
};
