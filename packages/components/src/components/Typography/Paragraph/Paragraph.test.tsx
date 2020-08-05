import React from 'react';
import Paragraph from './Paragraph';
import { render } from '@testing-library/react';
import { axe } from '../../utils';

it('renders the component', () => {
  const { container } = render(<Paragraph>Paragraph</Paragraph>);

  expect(container).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <Paragraph className="my-extra-class">Paragraph</Paragraph>,
  );

  expect(container).toMatchSnapshot();
});

it('renders the component lg', () => {
  const { container } = render(<Paragraph size="lg">Paragraph</Paragraph>);

  expect(container).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(<Paragraph>Paragraph</Paragraph>);

  expect(await axe(container)).toHaveNoViolations();
});
