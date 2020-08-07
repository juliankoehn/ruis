import React, { useState } from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { Popper, PopperPlacement } from './Popper';
import { Button } from '../../Button';

export default {
  title: 'Popper',
  decorators: [withKnobs],
};

const placements: PopperPlacement[] = [
  'auto',
  'auto-start',
  'auto-end',
  'top',
  'bottom',
  'right',
  'left',
  'top-start',
  'top-end',
  'bottom-start',
  'bottom-end',
  'right-start',
  'right-end',
  'left-start',
  'left-end',
];

export const Default = () => {
  const [isShown, setShown] = useState(false);
  return (
    <div
      style={{
        padding: 20,
      }}
    >
      <Popper
        trigger={
          <Button onClick={() => setShown((prev) => !prev)}>trigger</Button>
        }
        placement={select('placement', placements, 'auto')}
      >
        {isShown ? <div>popperElement</div> : undefined}
      </Popper>
    </div>
  );
};
