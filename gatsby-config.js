module.exports = {
  siteMetadata: {
    // edit below
    title: `PractiDev Blog`,
    author: `Angel Rodriguez`,
    description: `En PractiDev encontraras variados tips de desarrollo web y movil`,
    siteUrl: `https://practi.dev/`,
    social: {
      twitter: 'practidev',
      youtube: `UCT49h0K1819qLW4sNiWgvGw`,
    },
  },
  plugins: [
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-feed-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // edit below
        trackingId: `UA-163679052-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Practi Blog`,
        short_name: `PractiDev`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // edit below
        icon: `content/assets/urtipsdev-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `practidev`
      }
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyAup4qfifxfNWkVM9WrmqCOvxrpoB_mygM",
          authDomain: "website-78c91.firebaseapp.com",
          databaseURL: "https://website-78c91.firebaseio.com",
          projectId: "website-78c91",
          storageBucket: "website-78c91.appspot.com",
          messagingSenderId: "1010763307176",
          appId: "1:1010763307176:web:11b0ee7ba145d4702b8a9d",
          measurementId: "G-D0W5GQSE8E"
        }
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://dev.us18.list-manage.com/subscribe/post?u=f5e0cb2a583994cdaa71af485&amp;id=97223150ae', // add your MC list endpoint here; see instructions below
      },
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-6764772624922833`
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["./src"],
      },
    }
  ],
}
