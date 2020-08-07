import React from 'react';
import NextHead from 'next/head';

type HeadProps = {
  description: string;
  title: string;
  children?: React.ReactNode;
};

export const Head: React.FC<HeadProps> = () => {
  return <div></div>;
};
