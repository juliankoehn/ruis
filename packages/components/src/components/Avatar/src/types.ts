import { StandardProps, TypeAttributes } from '../../@types/common';

export type AvatarProps = {
  /** A avatar can have different sizes */
  size?: TypeAttributes.Size;

  /**
   * The `src` attribute for the `img` element.
   */
  src?: string;

  /**
   * The `sizes` attribute for the `img` element.
   */
  sizes?: string;

  /**
   * The `srcSet` attribute for the `img` element.
   * Use this attribute for responsive image display.
   */
  srcSet?: string;

  /**
   * Attributes applied to the `img` element if the component is used to display an image.
   * It can be used to listen for the loading error event.
   */
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
  /** Set avatar shape to circle  */
  circle?: boolean;

  /** This attribute defines an alternative text description of the image */
  alt?: string;
  backgroundColor?: string;
  color?: string;
  testId?: string;
} & StandardProps;
