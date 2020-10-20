// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
    try {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: `Hello Test` }),
      }
    } catch (err) {
      return { statusCode: 500, body: err.toString() }
    }
  }