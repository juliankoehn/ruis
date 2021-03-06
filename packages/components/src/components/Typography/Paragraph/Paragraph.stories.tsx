import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Paragraph from './Paragraph';
import { TypeAttributes } from '../../@types/common';

export default {
  title: 'Typography/Paragraph',
  decorators: [withKnobs],
};

const sizes: TypeAttributes.Size[] = ['xs', 'sm', 'md', 'lg'];
const dummyText = 'A red flair silhouetted the jagged edge of a wing.';

export const Default = () => {
  return (
    <div>
      {sizes.map((size) => (
        <Paragraph size={size}>
          {size}: {dummyText}{' '}
        </Paragraph>
      ))}
    </div>
  );
};
