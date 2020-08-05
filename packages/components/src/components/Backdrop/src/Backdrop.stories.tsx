import React, { useState } from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import Backdrop from './Backdrop';
import { Button } from '../..';

export default {
  title: 'Feedback/Backdrop',
  decorators: [withKnobs],
};

export const Default = () => {
  const [isShown, setShown] = useState(false);
  return (
    <div>
      <Button onClick={() => setShown(true)}>Toggle</Button>
      <Backdrop isShown={isShown} onExited={() => setShown(false)}>
        children
      </Backdrop>
    </div>
  );
};
