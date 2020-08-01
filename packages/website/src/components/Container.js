import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import tokens from '@ruids/tokens';
import { heightOfHeader } from './Navigation/Navigation';
import { MDXProvider } from '@mdx-js/react';

const styles = {
    container: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: calc(100vh - ${heightOfHeader}px);
    overflow-y: auto;
  `,

    main: css`
    flex: 1 1 0;
  `,

    inner: css`
    width: 960px;
    margin: 0 auto;
    padding: ${tokens.spacing12} ${tokens.spacing6} ${tokens.spacing6};
  `,

    innerHomePage: css`
    width: auto;
    text-align: center;
  `,
};

const Container = props => {
    const { frontmatter, children } = props;
    const isHomePage = frontmatter && frontmatter.type === 'home';


    return (
        <div css={styles.container}>
            <div css={styles.main}>
                <div css={isHomePage ? styles.innerHomePage : styles.inner}>
                    {children}
                </div>
            </div>
            
        </div>
    )
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Container