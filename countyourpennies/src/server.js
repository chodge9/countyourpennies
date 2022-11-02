const express = require('express')
const expressGraphQL = require('express-graphql')
const schema = require('../../schema').default.default

const app = express()
app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}))

app.listen(3003, () => {
    console.log('Server is running at port 3003')
})


// var express = require('express');
// var express_graphql = require('express-graphql');
// var { buildSchema } = require('graphql');
// // GraphQL schema
// var schema = buildSchema(
//     type , Query ,{
//         message: String
//     }
// );
// // Root resolver
// var root = {
//     message: () => 'Hello World!'
// };
// // Create an express server and a GraphQL endpoint
// var app = express();
// app.use('/graphql', express_graphql({
//     schema: schema,
//     rootValue: root,
//     graphiql: true
// }));
// app.listen(3003, () => console.log('Express GraphQL Server Now Running On localhost:3003/graphql'));



