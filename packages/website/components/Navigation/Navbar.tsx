import React, { useMemo } from 'react';
import { css } from '@emotion/core';
import tokens from '@ruids/tokens';
import Link from 'next/link';
import { ContentItem } from '@/lib/api';
import { useRouter } from 'next/router';

const styles = {
  primary: css({
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    padding: `${tokens.spacing4} ${tokens.spacing2}`,
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    height: '4rem',
    position: 'sticky',
    top: 0,
    zIndex: 1040,
    backgroundColor: tokens.colorNeutral800,
  }),
  left: css({
    marginLeft: 'auto',
    color: tokens.colorNeutral0,
  }),
  listItem: css({
    boxSizing: 'border-box',
    height: '4rem',
    justifyContent: 'center',
    flexDirection: 'column',
    display: 'flex',
    margin: 0,
    paddingLeft: tokens.spacing4,
  }),
  link: (active: boolean) =>
    css({
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      transition: 'color 0.1s ease-in-out 0s',
      position: 'relative',
      cursor: 'pointer',
      textDecoration: 'none',
      padding: `0 ${tokens.spacing4}`,
      color: tokens.colorNeutral0,
      backgroundColor: active ? tokens.colorNeutral900 : 'transparent',
      fontSize: tokens.textSm,
      ':hover': {
        backgroundColor: tokens.colorNeutral600,
      },
    }),
};

export const NavLink: React.FC<{
  item: ContentItem;
}> = ({ item }) => {
  const router = useRouter();

  const active = useMemo(() => {
    if (router.asPath === item.to) {
      return true;
    }
    return false;
  }, [item.to]);

  return (
    <Link href={item.to}>
      <li css={styles.listItem}>
        <a css={styles.link(active)}>{item.title}</a>
      </li>
    </Link>
  );
};

interface NavbarProps {
  items: ContentItem[];
}

export const Navbar: React.FC<NavbarProps> = ({ items }) => {
  return (
    <header role="banner" css={styles.primary}>
      <ul
        id="top"
        role="navigation"
        className="flex flex-row p-0 m-0"
        css={css({
          listStyle: 'none',
        })}
      >
        {items.map((item, index) => (
          <NavLink key={`navbar-${item.title}-${index}`} item={item} />
        ))}
      </ul>
      <div className="pr-5" css={styles.left}>
        side
      </div>
    </header>
  );
};
