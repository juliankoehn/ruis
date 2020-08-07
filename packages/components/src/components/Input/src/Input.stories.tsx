import React, { useState } from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { Input } from './Input';
import { Avatar } from '../../Avatar';
import { Icon } from '../../Icon';

export default {
  title: 'Input',
  decorators: [withKnobs],
};

export const Default = () => {
  const [value, setValue] = useState<string>();
  return (
    <div
      style={{
        padding: 20,
      }}
    >
      <Input
        elemAfterInput={<Icon icon="search" />}
        disabled={boolean('disabled', false)}
        invalid={boolean('invalid', false)}
        value={value}
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setValue(e.currentTarget.value)
        }
        placeholder="hello world"
      />
    </div>
  );
};
