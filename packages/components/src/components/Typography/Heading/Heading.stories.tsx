import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Heading from './Heading';
import { HeadingTypes, HeadingSize } from './types';

export default {
  title: 'Typography/Heading',
  decorators: [withKnobs],
};

const HeadingSizes: HeadingTypes[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
const Sizes: HeadingSize[] = [
  'xss',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
];
export const Default = () => {
  return (
    <div>
      {Sizes.map((size) => (
        <Heading size={size}>{size}: Heading</Heading>
      ))}
    </div>
  );
};
