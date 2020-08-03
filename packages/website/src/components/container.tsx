import React from 'react'
import { css } from '@emotion/core'
import { heightOfHeader } from './constants'
import { MDXProvider } from '@mdx-js/react'

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
        padding: 3rem 1.5rem 1.5rem;
    `,
    innerHomePage: css`
        width: auto;
        text-align: center;
    `,
}

const markToComponentMap = {
    h1: props => <h1 {...props} />,
}

export const Container: React.FC<{
    frontmatter: any
}> = ({ children, frontmatter }) => {
    const isHomePage = frontmatter && frontmatter.type === 'home';

    return (
        <div css={styles.container}>
            <div css={styles.main}>
                <div css={isHomePage ? styles.innerHomePage : styles.inner}>
                    <MDXProvider components={markToComponentMap}>
                        {children}
                    </MDXProvider>
                </div>
            </div>
        </div>
    )
}