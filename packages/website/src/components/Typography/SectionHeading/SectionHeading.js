import React from 'react'
import { css } from '@emotion/core'
import tokens from '@ruids/tokens'
import PropTypes from 'prop-types'

const textDark = '#192532'

export const styles = {
    heading: css`
        display: block;
        font-family: ${tokens.fontSans};
        font-weight: ${tokens.fontBold};
        color: ${textDark};
        font-size: ${tokens.textXs};
        line-height: ${tokens.leadingNormal};
        letter-spacing: ${tokens.trackingWidest};
        text-transform: uppercase;
        text-rendering: optimizeLegibility;
        margin: 0;
    `
}

export const SectionHeading = ({ element = 'h3', children }) => {
    const Element = element;

    return (
        <Element css={styles.heading}>
            {children}
        </Element>
    )
}

SectionHeading.propTypes = {
    element: PropTypes.oneOf('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'),
};