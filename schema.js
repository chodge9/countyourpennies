
const graphql = Noderequire('graphql')
const {
    GraphQLString,
    GraphQLObjectType,
    GraphQLSchema
} = graphql

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        data: {
            type: GraphQLString,
            resolve (_parentValue, _args) {
                return 'Hello, Graphql!'
            }
        }
    }
})

export default new GraphQLSchema({
    query: RootQuery
})