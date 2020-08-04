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

export const Image = () => {
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
        <Avatar src="https://404.error" alt="JK" />
      </div>
      <div
        style={{
          marginRight: 10,
        }}
      >
        <Avatar src="https://avatars2.githubusercontent.com/u/12592949?s=460&v=4">
          JK
        </Avatar>
      </div>
      <div
        style={{
          marginRight: 10,
        }}
      >
        <Avatar
          circle
          src="https://avatars2.githubusercontent.com/u/12592949?s=460&v=4"
        >
          JK
        </Avatar>
      </div>
    </div>
  );
};
