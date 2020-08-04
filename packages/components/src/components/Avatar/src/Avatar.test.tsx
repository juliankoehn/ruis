import React from 'react';
import { render } from '@testing-library/react';
import { Avatar } from './Avatar';
import { axe } from '../../utils';

describe('Avatar', () => {
  it('Should render avatar', () => {
    const content = 'JK';
    const { container, getAllByTestId } = render(<Avatar>{content}</Avatar>);

    const el = getAllByTestId('ruids-avatar');
    expect(el[0].innerHTML).toMatch(content);
    expect(container).toMatchSnapshot();
  });
});

it('has no a11y issues', async () => {
  const { container } = render(<Avatar>JK</Avatar>);

  expect(await axe(container)).toHaveNoViolations();
});
