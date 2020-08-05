import React from 'react';
import { render } from '@testing-library/react';
import Grid from './Grid';

describe('Grid', () => {
  it('Should render a container', () => {
    let title = 'Test';
    const { container } = render(<Grid>{title}</Grid>);

    expect(container).toMatchSnapshot();
  });
});
