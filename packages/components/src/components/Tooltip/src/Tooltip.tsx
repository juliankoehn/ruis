import React, { useState } from 'react';
import { Popper } from '../../Popper';
import { styles } from './styles';

// tooltip has content
// tooltip has children = reference
export type TooltipProps = {
  content: string;
  children: React.ReactElement;
};
export const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
  const [isShown, setShown] = useState(true);

  return (
    <div>
      <Popper
        trigger={React.cloneElement(children, {
          ...children.props,
          onMouseEnter: () => setShown(true),
          onMouseLeave: () => setShown(false),
        })}
        placement="right-start"
      >
        {isShown ? (
          <div css={styles.Tooltip}>
            <div css={styles.Content}>{content}</div>
          </div>
        ) : undefined}
      </Popper>
    </div>
  );
};
