import React, { useState } from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { Avatar } from './Avatar';

export default {
  title: 'Avatar',
  decorators: [withKnobs],
};

export const Default = () => {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <div
        style={{
          marginRight: 10,
        }}
      >
        <Avatar>JK</Avatar>
      </div>
      <div>
        <Avatar circle>JK</Avatar>
      </div>
    </div>
  );
};
