export type InputProps = {
  disabled?: boolean;
  invalid?: boolean;
  readOnly?: boolean;
  required?: boolean;
  /** Mousedown handler that will fire on the container element */
  onMouseDown?: React.MouseEventHandler<HTMLElement>;
  /** Element after input in textfield. */
  elemAfterInput?: React.ReactNode;
  /** Element before input in textfield. */
  elemBeforeInput?: React.ReactNode;
} & React.AllHTMLAttributes<HTMLInputElement>;
