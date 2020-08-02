import { css, keyframes } from '@emotion/core'
import styled from '@emotion/styled'
import { SpinnerPhases } from './types'
// @ts-ignore
import tokens from '@ruids/tokens'
import { SIZES_MAP } from './constants'

type AnimationParams = {
    delay: number
    phase: SpinnerPhases
}

type StyleParams = {
    invertColor: boolean;
    phase: SpinnerPhases;
    size: number;
}

const keyframeNames = {
    noop: keyframes`
        from { opacity: 0; }
        to { opacity: 0; }
    `,
    enterRotate: keyframes`
        from { transform: rotate(50deg); }
        to { transform: rotate(230deg); }
    `,
    leaveRotate: keyframes`
        from { transform: rotate(230deg); }
        to { transform: rotate(510deg); }
    `,
    leaveOpacity: keyframes`
        from { opacity: 1; }
        to { opacity: 0; }
    `,
}

export const getContainerAnimation = ({ delay, phase }: AnimationParams) => {
    if (phase === 'DELAY') {
        /* This hides the spinner and allows us to use animationend events to move to the next phase in
            * the same way we do with the other lifecycle stages */
        return `${delay}s ${keyframeNames.noop}`
    }

    if (phase === 'ENTER' || phase === 'IDLE') {
        return `1s ease-in-out forwards ${keyframeNames.enterRotate}`
    }

    if (phase === 'LEAVE') {
        return `0.53s ease-in-out forwards ${keyframeNames.leaveRotate},
                0.2s ease-in-out 0.33s ${keyframeNames.leaveOpacity}`;
    }

    return undefined
}

const getSize = (size: number) => {
    return {
        height: `${size}px`,
        width: `${size}px`
    }
}


export const getContainerStyles = (anims: AnimationParams, size: number) => ({
    display: 'flex',
    animation: getContainerAnimation(anims),
    ...getSize(size),
});

const getStrokeWidth = (size: number) => Math.round(size / 10)

const getStrokeCircumference = (size: number) => {
    const strokeWidth = getStrokeWidth(size);
    const strokeRadius = size / 2 - strokeWidth / 2;
    return Math.PI * strokeRadius * 2;
}

interface GetStrokeColorProps {
    invertColor?: boolean;
}

export const getStrokeColor = ({
    invertColor,
    ...props
}: GetStrokeColorProps): string | number =>
    invertColor ? tokens.colorNeutral0 : tokens.colorNeutral500;

const svgKeyframeNames: { [key: string]: string } = {
    noop: keyframes`
        from { opacity: 0; }
        to { opacity: 0; }
    `,
    rotate: keyframes`
        to { transform: rotate(360deg); }
    `,
    enterOpacity: keyframes`
        from { opacity: 0; }
        to { opacity: 1; }
    `,
    smallEnterStroke: keyframes`
        from { stroke-dashoffset: ${getStrokeCircumference(SIZES_MAP.small)}px; }
        to { stroke-dashoffset: ${getStrokeCircumference(SIZES_MAP.small) *
        0.8}px; }
    `,
    mediumEnterStroke: keyframes`
        from { stroke-dashoffset: ${getStrokeCircumference(SIZES_MAP.medium)}px; }
        to { stroke-dashoffset: ${getStrokeCircumference(SIZES_MAP.medium) *
            0.8}px; }
    `,
    largeEnterStroke: keyframes`
        from { stroke-dashoffset: ${getStrokeCircumference(SIZES_MAP.large)}px; }
        to { stroke-dashoffset: ${getStrokeCircumference(SIZES_MAP.large) *
            0.8}px; }
    `,
    xlargeEnterStroke: keyframes`
        from { stroke-dashoffset: ${getStrokeCircumference(SIZES_MAP.xlarge)}px; }
        to { stroke-dashoffset: ${getStrokeCircumference(SIZES_MAP.xlarge) *
            0.8}px; }
    `,
}

/* If a standard size is used, we can use one of our statically defined keyframes, otherwise
 * we're forced to dynamically create the keyframe and incur a performance cost.
 */
const getEnterStrokeKeyframe = (size: number) => {
    const standardSizeName = Object.keys(SIZES_MAP).find(
        sizeName => size === SIZES_MAP[sizeName],
    );
    if (standardSizeName) {
        return keyframeNames[`${standardSizeName}EnterStroke`];
    }

    const circumference = getStrokeCircumference(size);
    return keyframes`
    from { stroke-dashoffset: ${circumference}px; }
    to { stroke-dashoffset: ${circumference * 0.8}px; }
  `;
};

const getSvgAnimation = (props: StyleParams) => {
    const circumference = getStrokeCircumference(props.size)
    const animation = (animProps: StyleParams) => {
        const baseAnimation = '0.86s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite'
        if (animProps.phase === 'ENTER') {
            return `${baseAnimation} ${svgKeyframeNames.rotate},
            0.8s ease-in-out ${getEnterStrokeKeyframe(animProps.size)},
            0.2s ease-in-out ${svgKeyframeNames.enterOpacity};`
        }

        return css`${baseAnimation} ${svgKeyframeNames.rotate}`
    }

    return css`
        animation: ${animation(props)};
        fill: none;
        stroke: ${getStrokeColor({ invertColor: props.invertColor })};
        stroke-dasharray: ${circumference}px;
        stroke-dashoffset: ${circumference * 0.8}px;
        stroke-linecap: round;
        stroke-width: ${getStrokeWidth(props.size)}px;
        transform-origin: center;
    `
}


export const Svg = styled.svg<StyleParams>`
    ${(props) => getSvgAnimation(props)}
`;
