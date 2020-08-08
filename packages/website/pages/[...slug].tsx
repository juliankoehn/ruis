import React from 'react';
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { Head, Navigation, Layout } from '../components';
import { Container, Heading, Paragraph, Button } from '@ruids/components';
import { getAllDocs, ContentItem, getContentByPath } from '@/lib/api';
import { Markdown } from '@/components/Markdown/Markdown';

type Props = {
  content: ContentItem;
  navigation: ContentItem[];
};

export const Home: NextPage<Props> = ({ content, navigation }) => {
  if (!content.examples?.length) {
    return (
      <React.Fragment>
        <Head title={content.title} description={content.description} />
        <Layout navigation={navigation}>
          <Markdown source={content.content} />
        </Layout>
      </React.Fragment>
    );
  }

  const docs = content.content.split('<!--{demo}-->');
  const header = docs[0];
  const footer = docs[1];

  return (
    <React.Fragment>
      <Head title={content.title} description={content.description} />

      <Layout navigation={navigation}>
        <Markdown source={header} />
        i have examples!
        <Markdown source={footer} />
      </Layout>
    </React.Fragment>
  );
};

export const getStaticPaths: GetStaticPaths<{
  slug: Array<string>;
}> = async () => {
  const { content } = getAllDocs();

  const paths: Array<{
    params: {
      slug: Array<string>;
    };
  }> = [];
  content.forEach((n) => {
    if (n.to) {
      paths.push({
        params: {
          slug: [n.to.replace(/^\/+/g, '')],
        },
      });

      if (n.children) {
        n.children.forEach((c) => {
          const lastIndex = c.to.substring(c.to.lastIndexOf('/') + 1);
          paths.push({
            params: {
              slug: [n.to.replace(/^\/+/g, ''), lastIndex],
            },
          });
        });
      }
    }
  });

  return {
    paths,
    fallback: false, // See the "fallback" section below
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const item = getContentByPath(params.slug);
  const { content: Navigation } = getAllDocs();
  return {
    props: {
      content: item,
      slug: params.slug,
      navigation: Navigation,
    },
  };
};

export default Home;
