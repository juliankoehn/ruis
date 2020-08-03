import React from 'react'
import { css } from '@emotion/core'
import { heightOfHeader } from './constants'
import { MDXProvider } from '@mdx-js/react'
import { DocFormatter } from './DocFormatter'
import { Paragraph, Heading, Typography, Table } from '@ruids/components'

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
  h1: props => <Heading is="h1" {...props} />,
  h2: props => <Heading is="h2" {...props} />,
  h3: props => <Heading is="h3" {...props} />,
  h4: props => <Heading is="h4" {...props} />,
  h5: props => <Heading is="h5" {...props} />,
  h6: props => <Heading is="h6" {...props} />,
  p: props => <Paragraph {...props} />,
  table: props => <Table {...props} />,
  thead: props => <Table.Head {...props} />,
  tbody: props => <Table.Body {...props} />,
  tr: props => <Table.Row {...props} />,
  th: props => <Table.Cell style={{ textAlign: 'left' }} {...props} />,
  td: props => <Table.Cell {...props} />,
}

export const Container: React.FC<{
  frontmatter: any
}> = ({ children, frontmatter }) => {
  const isHomePage = frontmatter && frontmatter.type === 'home'

  return (
    <div css={styles.container}>
      <div css={styles.main}>
        <div css={isHomePage ? styles.innerHomePage : styles.inner}>
          <Typography>
            <MDXProvider components={markToComponentMap}>
              <DocFormatter frontmatter={frontmatter}>{children}</DocFormatter>
            </MDXProvider>
          </Typography>
        </div>
      </div>
    </div>
  )
}
