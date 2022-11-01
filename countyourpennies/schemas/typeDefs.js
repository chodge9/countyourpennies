const { gql } = require('apollo-server-express');
const typeDefs = gql`
    type Query {
        CYP
    }
`;

module.exports = typeDefs;