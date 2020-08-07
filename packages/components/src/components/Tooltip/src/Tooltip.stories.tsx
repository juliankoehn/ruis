import React, { useState } from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { Tooltip } from './Tooltip';
import { Button } from '../../Button';

export default {
  title: 'Tooltip',
  decorators: [withKnobs],
};

export const Default = () => {
  const [isShown, setShown] = useState(false);
  return (
    <div
      style={{
        padding: 20,
      }}
    >
      <Tooltip content="I am a tooltip COntent">
        <Button>I am a trigger</Button>
      </Tooltip>
    </div>
  );
};
