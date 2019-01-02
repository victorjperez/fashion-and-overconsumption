const tailwind = require("../tailwind");

module.exports = {
  pathPrefix: "/fashion-and-overconsumption", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: "Fashion & Overconsumption", // Navigation and Site Title
  siteTitleAlt: "Fashion & Overconsumption", // Alternative Site title for SEO
  siteUrl: "https://victorjperez.github.io", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteLogo: "/logos/logo-1024.png", // Used for SEO and manifest
  siteDescription: "Why we buy so many clothes, and what that means for us.",

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: "", // Twitter Username
  ogSiteName: "", // Facebook Site Name
  ogLanguage: "en_US", // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue
};
