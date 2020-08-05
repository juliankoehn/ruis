import { StandardProps, TypeAttributes } from '../../@types/common';

export type ModalProps = {
  /**
   * A single child content element.
   */
  children: React.ReactNode;
  testId?: string;
  isShown?: boolean;
  /**
   * Title of the Dialog. Titles should use Title Case.
   */
  title?: string;
  /**
   * When true, the header with the title and close icon button is shown.
   * Defaults to true.
   */
  hasHeader?: boolean;
  /**
   * You can override the default header with your own custom component.
   *
   * This is useful if you want to provide a custom header and footer, while
   * also enabling your Dialog's content to scroll.
   *
   * Header can either be a React node or a function accepting `({ close })`.
   */
  header?: React.ReactNode | (({ close }: { close: () => void }) => void);
  /**
   * When true, the footer with the cancel and confirm button is shown.
   * Defaults to true.
   */
  hasFooter?: boolean;
  /**
   * You can override the default footer with your own custom component.
   *
   * This is useful if you want to provide a custom header and footer, while
   * also enabling your Dialog's content to scroll.
   *
   * Footer can either be a React node or a function accepting `({ close })`.
   */
  footer?: React.ReactNode | (({ close }: { close: () => void }) => void);
  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete?: () => void;
  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete?: () => void;
  /**
   * Function that will be called when the cancel button is clicked.
   * This closes the Dialog by default.
   */
  onCancel?: (close: () => void) => void;
  /**
   * Boolean indicating if clicking the overlay should close the overlay.
   * Defaults to true.
   */
  shouldCloseOnOverlayClick?: boolean;
  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   * Defaults to true.
   */
  shouldCloseOnEscapePress?: boolean;
  /**
   * Whether or not to prevent scrolling in the outer body. Defaults to false.
   */
  preventBodyScrolling?: boolean;
  /**
   * When true, the close button is shown. Defaults to true.
   */
  hasClose?: boolean;
  /**
   * The min height of the body content.
   * Makes it less weird when only showing little content.
   */
  minHeightContent?: string | number;
  /**
   * When true, the cancel button is shown. Defaults to true.
   */
  hasCancel?: boolean;
  /**
   * Label of the cancel button. Defaults to 'Cancel'.
   */
  cancelLabel?: string;
  confirmLabel?: string;
  cancelButtonType?: TypeAttributes.Appearance;
  confirmButtonType?: TypeAttributes.Appearance;
  /**
   * Function that will be called when the confirm button is clicked.
   * This does not close the Dialog. A close function will be passed
   * as a paramater you can use to close the dialog.
   * If unspecified, this defaults to closing the Dialog.
   */
  onConfirm?: (close: () => void) => void;
};
