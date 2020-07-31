module.exports = {
    siteMetadata: {
        title: 'Ruis - Design System',
        promoText: '',
        promoLink: '',
        promoLinkText: '',
        menuLinks: [
            {
                name: 'Foundation',
                link: '',
                menuLinks: []
            }
        ]
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-svgr',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: `${__dirname}/src/pages/`,
            },
        },
        'gatsby-transformer-javascript-frontmatter',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                defaultLayouts: {
                    default: require.resolve('./src/components/Layout'),
                },
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 912,
                        },
                    },
                ],
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-plugin-emotion',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'Ruis - Design System',
                short_name: 'Ruis',
                start_url: '/',
                background_color: '#152233',
                theme_color: '#152233',
                display: 'minimal-ui',
                icon: 'src/images/forma-icon.png', // This path is relative to the root of the site.
            },
        },
    ]
}