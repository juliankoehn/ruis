import React from 'react';
import styles from './styles';
import { SideNavbarProps, NavItem } from './types';
import { Button } from '../../Button';
import { IconButton } from '../../IconButton';
import { Icon } from '../../Icon';
import { Tooltip } from '../../Tooltip';

const Item: React.FC<NavItem> = ({ label, icon, to }) => {
  return (
    <Tooltip content={label}>
      <a href={to} css={styles.navItem}>
        <Icon icon={icon} />
      </a>
    </Tooltip>
  );
};

export const SideNavbar = React.memo(function SideNavbar(
  props: SideNavbarProps,
) {
  const { items, footer } = props;
  return (
    <div css={styles.container}>
      <div css={styles.header}>
        {items.map((item, index) => (
          <Item key={`nav-${item.label}-${index}`} {...item}>
            {item.icon}
          </Item>
        ))}
      </div>
      {footer && <div css={styles.footer}>footer</div>}
    </div>
  );
});
