import React from 'react'
import { Transition } from 'react-transition-group'
import { SpinnerProps, SpinnerState, defaultProps } from './types';
import { SIZES_MAP, DEFAULT_SIZE } from './constants';
import { getContainerStyles, Svg } from './styles';
import { css } from '@emotion/core'

export class Spinner extends React.Component<SpinnerProps, SpinnerState> {
    static defaultProps = defaultProps
    transitionNode!: Transition<HTMLElement | undefined> | null

    constructor(props: SpinnerProps) {
        super(props)
        this.state = {
            phase: ''
        }
    }

    enter = () => {
        const { delay } = this.props
        if (delay) {
            this.setState({ phase: 'DELAY' })
        } else {
            this.setState({ phase: 'ENTER' })
        }
    }

    idle = () => {
        this.setState({ phase: 'IDLE' })
    }

    exit = () => {
        this.setState({ phase: 'LEAVE' })
    }

    endListener = (node: HTMLElement, done: () => void) => {
        const executeCallback = (event: Event): void => {
            // ignore animation events on the glyph

            if ((event.target as SVGElement).tagName === 'svg') {
                return
            }
            if (this.state.phase === 'DELAY') {
                this.setState({ phase: 'ENTER'})
                this.endListener(node, done)
            } else {
                done()
            }
            return node && node.removeEventListener('animationend', executeCallback)
        }

        if (node && node.addEventListener) {
            return node.addEventListener('animationend', executeCallback)
        }
        return done()
    }

    validateSize = () => {
        const { size } = this.props
        const spinnerSize = SIZES_MAP[size] || size
        const res = typeof spinnerSize === 'number' ? spinnerSize : DEFAULT_SIZE
        return res
    }

    render() {
        const { phase } = this.state
        const { delay, invertColor, isCompleting, testId } = this.props
        const size = this.validateSize()

        const strokeWidth = Math.round(size / 10)
        const strokeRadius = size / 2 - strokeWidth / 2

        return (
            <span
                css={{
                    display: 'inline-flex',
                    verticalAlign: 'middle'
                }}
            >
                <Transition
                    addEndListener={this.endListener}
                    appear
                    in={!isCompleting}
                    mountOnEnter
                    unmountOnExit
                    onEnter={this.enter}
                    onEntered={this.idle}
                    onExit={this.exit}
                    onExited={() => this.props.onComplete()}
                    timeout={0}
                    ref={node => {
                        this.transitionNode = node;
                    }}
                >
                    <span
                        css={css({
                            ...getContainerStyles({ delay, phase }, size),
                            'div + &': {
                                display: 'none'
                            }
                        })}
                    >
                        <Svg
                            focusable={false}
                            height={size}
                            width={size}
                            viewBox={`0 0 ${size} ${size}`}
                            xmlns="http://www.w3.org/2000/svg"
                            invertColor={invertColor}
                            phase={phase}
                            size={size}
                        >
                            <circle cx={size / 2} cy={size / 2} r={strokeRadius} />
                        </Svg>
                    </span>
                </Transition>
            </span>
        )
    }
}