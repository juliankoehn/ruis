import React, { useMemo } from 'react';
import { Navigation } from './Navigation';
import { useRouter } from 'next/router';
import tokens from '@ruids/tokens';
import { css } from '@emotion/core';
import { Head } from './Head';
import parseMD from '@/utils/parseMD';
import { Markdown } from './Markdown/Markdown';

export type PageContentProps = {
  id?: string;
  category?: string;
  examples?: string[];
  dependencies?: any;
  tabExamples?: any[];
  children?: React.ReactNode;
};

export const PageContent: React.FC<PageContentProps> = ({
  category,
  children,
}) => {
  const router = useRouter();
  const { context, title, description } = useMemo(() => {
    const pathname = router.pathname;
    const id = pathname.match(new RegExp(`\/${category}\/(\\S*)`))?.[1];
    const context = require(`../pages${pathname}/index.md`);
    const res = parseMD(context);

    return {
      pathname,
      id,
      context: res.content,
      title: res.metadata.title ?? '',
      description: res.metadata.description ?? '',
    };
  }, [router]);

  return (
    <div className="p-6">
      <Head title={title} description={description} />
      <Markdown source={context} />
      {children}
    </div>
  );
};

export const Frame: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <Navigation />
      <div
        css={css({
          marginLeft: tokens.spacing16,
        })}
      >
        {children}
      </div>
    </React.Fragment>
  );
};

export const Page: React.FC<PageContentProps> = ({ ...rest }) => {
  return (
    <Frame>
      <PageContent {...rest} />
    </Frame>
  );
};
