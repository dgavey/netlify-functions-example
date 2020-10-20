// Require the framework and instantiate it
const api = require('lambda-api')()

// Define a route
api.get('/hello/', async (req,res) => {
    return { text: 'Hello Dev.to from Lambda API' }
  })

// Declare your Lambda handler
exports.handler = async (event, context) => {
  // Run the request
  return await api.run(event, context)
}