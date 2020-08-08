import React from 'react';
import { MessageProps, MessageState, defaultProps } from './types';
import { Icon } from '../Icon';
import { styles, getMessageStyles } from './styles';
import { IconNames } from '../Icon/types';

export class Message extends React.Component<MessageProps, MessageState> {
  static defaultProps = defaultProps;

  constructor(props: MessageProps) {
    super(props);
    this.state = {
      display: 'show',
    };
  }

  handleClose = () => {
    this.setState({ display: 'hiding' });

    setTimeout(
      () =>
        this.setState({ display: 'hide' }, () => {
          this.props.onClose?.();
        }),
      1000,
    );
  };

  renderCloseButton(closeLabel: string) {
    return (
      <button css={styles.closeButton} type="button" onClick={this.handleClose}>
        <Icon icon="x" />
      </button>
    );
  }

  getIconProps(): {
    appearance: 'primary' | 'positive' | 'negative' | 'warning';
    icon: IconNames;
  } {
    switch (this.props.appearance) {
      case 'warning': {
        return {
          appearance: 'warning',
          icon: 'exclamation_circle',
        };
      }
      case 'positive': {
        return {
          appearance: 'positive',
          icon: 'check_circle',
        };
      }
      case 'negative': {
        return {
          appearance: 'negative',
          icon: 'x_circle',
        };
      }
      // default is 'info'
      default: {
        return {
          appearance: 'primary',
          icon: 'information_circle',
        };
      }
    }
  }

  render() {
    const {
      closable,
      closeLabel,
      title,
      description,
      showIcon,
      testId,
      full,
    } = this.props;
    const { display } = this.state;

    if (display === 'hide') {
      return null;
    }

    const hasTitle = !!title;
    const hasDesc = !!description;

    const iconProps = this.getIconProps();

    return (
      <div
        css={getMessageStyles(this.props, display, !!full)}
        data-test-id={testId}
      >
        <div css={styles.container(!!showIcon)}>
          {closable && this.renderCloseButton(closeLabel)}
          {showIcon && (
            <div css={styles.iconWrapper}>
              <Icon appearance={iconProps.appearance} icon={iconProps.icon} />
            </div>
          )}

          <div>
            {hasTitle && <h5 css={styles.title}>{title}</h5>}
            {hasDesc && <div>{description}</div>}
          </div>
        </div>
      </div>
    );
  }
}
