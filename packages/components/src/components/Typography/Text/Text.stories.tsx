import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Text from './Text';
import { TypeAttributes } from '../../@types/common';

export default {
  title: 'Typography/Text',
  decorators: [withKnobs],
};

const sizes: TypeAttributes.Size[] = ['xs', 'sm', 'md', 'lg'];
const dummyText = 'A red flair silhouetted the jagged edge of a wing.';

export const Default = () => {
  return (
    <div>
      {sizes.map((size) => (
        <div>
          <Text size={size}>
            {size}: {dummyText}
          </Text>
        </div>
      ))}
    </div>
  );
};
