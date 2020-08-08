import React from 'react';
import NextHead from 'next/head';

type HeadProps = {
  description: string;
  title: string;
  children?: React.ReactNode;
};

export const Head: React.FC<HeadProps> = ({ title, description, children }) => {
  return (
    <NextHead>
      <title>{title} - ruids</title>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      {children}
    </NextHead>
  );
};
