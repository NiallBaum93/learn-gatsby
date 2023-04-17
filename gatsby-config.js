/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Learn Gatsby`,
        siteUrl: `http://localhost:8000/`,
    },
    plugins: [
        {
            resolve: "gatsby-source-wordpress",
            options: {
                url: "https://learngatsby.wpengine.com/graphql",
                jwtAuth: {
                    htaccess: {
                        username: "niall.react",
                        password: "L4y3r5-5tud10.1.",
                        sendImmediately: false,
                    },
                    jwtUser: {
                        username: "niall.react",
                        password: "L4y3r5-5tud10.1.",
                    },
                },
            },
        },
        "gatsby-plugin-wpgraphql",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
    ],
};
