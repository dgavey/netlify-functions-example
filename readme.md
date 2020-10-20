* Netlify Functions Example

This repo serves as examples of how you can zip up your lambda functions with it's dependencies on Netlify.  Full blog post write up on Dev.to.


*** Oddities
- Netlify Dev (CLI) won't serve functions on a purely static site, so I included an extremely basic 11ty generator
- Netlify Dev (CLI) won't allow access to functions in folders unless there is a build command in dev environment