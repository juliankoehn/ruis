import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import Container from './Container';

export default {
  title: 'Layout/Container',
  decorators: [withKnobs],
};

export const Default = () => (
  <Container fluid={boolean('fluid', false)}>inside of a grid</Container>
);
