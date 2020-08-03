import React, { useMemo } from 'react'
import { Heading } from '@ruids/components'
import { styles } from './styles'

export const DocFormatter: React.FC<{
  frontmatter: any
}> = ({ frontmatter, children }) => {
  const data = useMemo(() => {
    return {
      title: frontmatter && frontmatter.title,
      githubUrl: frontmatter && frontmatter.storybook,
      storybookUrl: frontmatter && frontmatter.github,
      status: frontmatter && frontmatter.status,
    }
  }, [])

  return (
    <React.Fragment>
      <header css={styles.header}>
        {data.title && <Heading is="h3">{data.title}</Heading>}
      </header>
      <main>{children}</main>
    </React.Fragment>
  )
}
