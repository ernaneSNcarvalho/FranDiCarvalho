module.exports = {
    siteMetadata:{
        title: 'Fran di Carvalho'
    },
    plugins: [
        
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-plugin-purgecss',
            options: {
                printRejected: true,
                tailwind: true
            }
        }
    ]
}