import React from 'react';
import { render } from '@testing-library/react';
import Container from './Container';

describe('Container', () => {
  it('Should render a container', () => {
    let title = 'Test';
    const { container } = render(<Container>{title}</Container>);

    expect(container).toMatchSnapshot();
  });
});
