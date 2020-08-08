import React, { useMemo } from 'react';
import { ContentItem } from '@/lib/api';
import { css } from '@emotion/core';
import tokens from '@ruids/tokens';
import Link from 'next/link';

const styles = {
  wrapper: css({
    boxSizing: 'border-box',
    borderTop: `1px solid ${tokens.colorNeutral30}`,
    overflow: 'hidden',
    display: 'block',
    height: '100%',
  }),
  nav: css({
    height: '100%',
    overflow: 'auto',
    marginRight: '-40px',
    paddingRight: 'calc(40px + 1rem)',
  }),
  link: (children: boolean) =>
    css({
      color: tokens.colorTextDark,
      cursor: 'pointer',
      fontWeight: children ? tokens.fontBold : tokens.fontNormal,
      ':hover': {
        color: tokens.colorTextLightest,
      },
    }),
  childBox: css({
    marginTop: tokens.spacing1,
    marginBottom: tokens.spacing4,
  }),
};

const NavItem: React.FC<{
  item: ContentItem;
}> = ({ item }) => {
  const { children } = item;
  return (
    <div data-children={!!children?.length}>
      <Link href={item.to}>
        <a css={styles.link(!!children.length)}>{item.title}</a>
      </Link>
      {!!children.length && (
        <div css={styles.childBox}>
          {children.map((c, i) => (
            <Link href={c.to}>
              <a css={styles.link(false)}>{c.title}</a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export const Sidenav: React.FC<{
  items: ContentItem[];
}> = ({ items }) => {
  return (
    <React.Fragment>
      <div css={styles.wrapper}>
        <nav role="complementary" css={styles.nav} className="pt-2 pb-4">
          {items.map((item, index) => (
            <NavItem key={`sidenav-${item.title}-${index}`} item={item} />
          ))}
        </nav>
        sidenav
      </div>
    </React.Fragment>
  );
};
