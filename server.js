const express = require('express')
const expressGraphQL = require('express-graphql')
const schema = require('./schema').default.default

const app = express()
app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}))

app.listen(3000, () => {
    console.log('Server is running at port 3000')
})