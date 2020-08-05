import React, { useState } from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { Modal } from './Modal';
import { Button } from '../../Button';

export default {
  title: 'Feedback/Modal',
  decorators: [withKnobs],
};

export const Default = () => {
  const [shown, setShown] = useState(false);

  return (
    <div>
      <Button onClick={() => setShown(true)}>Show Modal</Button>
      <Modal
        isShown={shown}
        onCloseComplete={() => setShown(false)}
        hasHeader={boolean('hasHeader', true)}
        title={text('title', 'Modal Title')}
        minHeightContent="auto"
        shouldCloseOnEscapePress={boolean('shouldCloseOnEscapePress', true)}
        shouldCloseOnOverlayClick={boolean('shouldCloseOnOverlayClick', true)}
        preventBodyScrolling={boolean('preventBodyScrolling', true)}
        cancelLabel={text('cancelLabel', 'Cancel')}
        confirmLabel={text('confirmLabel', 'Confirm')}
      >
        hello from modal
      </Modal>
    </div>
  );
};
