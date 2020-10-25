# Netlify Functions Example 

This repo serves as examples of how you can zip up your lambda functions with it's dependencies on Netlify.  Full blog post write up on [Dev.to](https://dev.to/dgavey/zip-your-own-netlify-functions-for-better-dependency-control-24bn). [Demo Site Here](https://dgavey-netlify-functions-demo.netlify.app/)


### Oddities
- Netlify Dev (CLI) won't serve functions on a purely static site, so I included an extremely basic eleventy generator
- Netlify Dev (CLI) won't allow access to functions in folders unless there is a build command in dev environment