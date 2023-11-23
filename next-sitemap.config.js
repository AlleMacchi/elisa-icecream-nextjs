/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.elisagelato.com.au',
    generateRobotsTxt: true, 
    exclude: ['/server-sitemap-index.xml'],
    robotsTxtOptions: {
        additionalSitemaps: [
            'htpps://www.elisagelato.com.au/server-sitemap-index.xml',
        ],
    },
  }