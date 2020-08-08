import React from 'react';
import { css } from '@emotion/core';
import tokens from '@ruids/tokens';
import { Navbar } from './Navigation/Navbar';
import { ContentItem } from '@/lib/api';
import { Sidenav } from './Navigation/Sidenav';

const layout = {
  navigation: css({
    position: 'sticky',
    top: '4rem',
    zIndex: 1000,
    height: 'calc(100vh - 4rem)',
    backgroundColor: tokens.colorNeutral20,
    borderRight: `1px solid ${tokens.colorNeutral30}`,
  }),
};

interface LayoutProps {
  navigation: ContentItem[];
}

export const Layout: React.FC<LayoutProps> = ({ navigation, children }) => {
  return (
    <div>
      <Navbar items={navigation} />
      <div className="w-full px-4 mx-auto" style={{ boxSizing: 'border-box' }}>
        <div className="grid grid-flow-col grid-cols-12 -mx-4">
          <div className="col-span-2 px-4" css={layout.navigation}>
            <Sidenav items={navigation} />
          </div>
          <main className="col-span-10 py-8 px-16">{children}</main>
        </div>
      </div>
    </div>
  );
};
