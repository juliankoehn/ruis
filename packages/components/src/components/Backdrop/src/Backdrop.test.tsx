import React from 'react';
import Backdrop from './Backdrop';
import { render } from '@testing-library/react';

describe('Backdrop', () => {
  it('it should render', () => {
    const { container } = render(<Backdrop>Paragraph</Backdrop>);

    expect(container).toMatchSnapshot();
  });
});
