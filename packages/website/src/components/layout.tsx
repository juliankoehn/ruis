import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import Header from './header'
import '@ruids/css/dist/styles.css'
import { Container } from './container'
import { Navigation } from './navigation'

const styles = {
  main: css`
    display: flex;
    flex: 2;
  `,
  container: css`
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow-y: hidden;
  `,
}

const Layout: React.FC<any> = ({ children, location, pageContext }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
            menuLinks {
              link
              name
            }
          }
        }
      }
    }
  `)

  return (
    <div css={styles.container}>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          {
            name: 'description',
            content: 'ruids - Design System',
          },
          {
            name: 'keywords',
            content: 'ruids, design, design-system',
          },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <Header />
      <div css={styles.main}>
        <Navigation
          items={data.site.siteMetadata.menuLinks}
          currentPath={location && location.pathname}
        />
        <Container frontmatter={pageContext && pageContext.frontmatter}>
          {children}
        </Container>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
