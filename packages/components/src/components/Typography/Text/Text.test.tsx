import React from 'react';
import Text from './Text';
import { render } from '@testing-library/react';
import { axe } from '../../utils';

describe('Text', () => {
  it('renders the component', () => {
    const { container } = render(<Text>Text</Text>);

    expect(container).toMatchSnapshot();
  });

  it('has no a11y issues', async () => {
    const { container } = render(<Text>Text</Text>);

    expect(await axe(container)).toHaveNoViolations();
  });
});
