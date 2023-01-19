/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://lucasquearis.vercel.app/",
  generateRobotsTxt: true, // (optional)
  // ...other options
};
