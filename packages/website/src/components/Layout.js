import React from 'react';
import Helmet from 'react-helmet';
import { css } from '@emotion/core';
import { StaticQuery, graphql } from 'gatsby';
import Header from './Header';
import Container from './Container';

const styles = {
    main: css`
    display: flex;
    flex: 2;
  `,
    test: css`
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow-y: hidden;
  `,
};

const Layout = props => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
    siteMetadata {
      promoLink
      promoLinkText
      promoText
      title
      menuLinks {
        name
        link
      }
    }
  }
            }
        `}
        render={data => {
            return (
                <div css={styles.test}>
                    <Helmet
                        title={data.site.siteMetadata.title}
                        meta={[
                            {
                                name: 'description',
                                content: 'Ruis - Design System'
                            },
                            {
                                name: 'keywords',
                                content: 'delivc, juliankoehn, react, design-system'
                            }
                        ]}
                    >
                        <html lang="en" />
                    </Helmet>

                    <Header />
                    
                    <div css={styles.main}>
                        <Container>
                            {props.children}
                        </Container>
                    </div>
                    
                </div>
            )
        }}
    />
)

export default Layout