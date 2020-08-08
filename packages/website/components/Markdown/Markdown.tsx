import React from 'react';
import ReactMarkdown, { ReactMarkdownProps } from 'react-markdown';
import { HeadingSize } from '@ruids/components/dist/components/Typography/Heading/types';
import { Heading, Paragraph } from '@ruids/components';

const levelToHeading = (level: 1 | 2 | 3 | 4 | 5 | 6): HeadingSize => {
  switch (level) {
    case 1: {
      return '3xl';
    }
    case 2: {
      return '2xl';
    }
    case 3: {
      return 'xl';
    }
    case 4: {
      return 'lg';
    }
    case 5: {
      return 'md';
    }
    case 6: {
      return 'sm';
    }
  }
};

const renderers = {
  heading: ({ level, ...props }) => (
    <Heading size={levelToHeading(level)} {...props} />
  ),
  paragraph: (props: any) => <Paragraph {...props} />,
  list: (props: any) => <ul style={{ listStyle: 'initial' }} {...props} />,
  listItem: (props: any) => (
    <li style={{ marginTop: 4, lineHeight: 1.5 }} {...props} />
  ),
};

export const Markdown: React.FC<ReactMarkdownProps> = (props) => {
  return <ReactMarkdown {...props} renderers={renderers} />;
};
