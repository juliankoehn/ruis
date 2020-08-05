import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import Grid from './Grid';

export default {
  title: 'Layout/Grid',
  decorators: [withKnobs],
};

export const Default = () => (
  <Grid fluid={boolean('fluid', false)}>inside of a grid</Grid>
);
