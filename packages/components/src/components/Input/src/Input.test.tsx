import React from 'react';
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

  it('should be focused', () => {
    const focusSpy = jest.fn();
    const blurSpy = jest.fn();

    const inputRef = React.createRef<HTMLInputElement>();
    const { container } = render(
      <Input ref={inputRef} onFocus={focusSpy} onBlur={blurSpy} />,
    );
    expect(focusSpy).toHaveBeenCalledTimes(0);
    expect(blurSpy).toHaveBeenCalledTimes(0);
    container.querySelector('input')?.focus();
    expect(focusSpy).toHaveBeenCalledTimes(1);
    container.querySelector('input')?.blur();
    expect(blurSpy).toHaveBeenCalledTimes(1);
  });
});
