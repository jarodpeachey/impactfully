const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\Jarod\\Code\\Freelancer Gigs\\Impactfully\\.cache\\dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\Jarod\\Code\\Freelancer Gigs\\Impactfully\\src\\pages\\index.js"))),
  "component---src-pages-login-jsx": hot(preferDefault(require("D:\\Jarod\\Code\\Freelancer Gigs\\Impactfully\\src\\pages\\login.jsx"))),
  "component---src-pages-signup-jsx": hot(preferDefault(require("D:\\Jarod\\Code\\Freelancer Gigs\\Impactfully\\src\\pages\\signup.jsx")))
}

