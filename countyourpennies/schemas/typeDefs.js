const { gql } = require('apollo-server-express');
const typeDefs = gql`
    type Query {
        CYP: String
    }
`;

module.exports = typeDefs;