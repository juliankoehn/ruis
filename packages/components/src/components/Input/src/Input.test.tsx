import React, { useRef } from 'react';
import { render } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  it('should render', () => {
    const { container } = render(<Input />);
    expect(container).toMatchSnapshot();
  });

  it('should forward ref', () => {
    const inputRef = React.createRef<HTMLInputElement>();

    render(<Input ref={inputRef} />);

    expect(inputRef.current).not.toBeUndefined();
  });

  it('should be disabled', () => {
    const inputRef = React.createRef<HTMLInputElement>();
    render(<Input ref={inputRef} disabled />);

    expect(inputRef.current).not.toBeUndefined();
    expect(inputRef.current?.hasAttribute('disabled')).toBeTruthy();
  });

  it('should be readOnly', () => {
    const inputRef = React.createRef<HTMLInputElement>();
    render(<Input ref={inputRef} readOnly />);

    expect(inputRef.current).not.toBeUndefined();
    expect(inputRef.current?.hasAttribute('readOnly')).toBeTruthy();
  });

  it('should be required', () => {
    const inputRef = React.createRef<HTMLInputElement>();
    render(<Input ref={inputRef} required />);

    expect(inputRef.current).not.toBeUndefined();
    expect(inputRef.current?.hasAttribute('required')).toBeTruthy();
  });
});
