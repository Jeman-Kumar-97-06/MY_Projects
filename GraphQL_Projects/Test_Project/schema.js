//The '!' at the end tells, that field is required.
//The "type Query" object tells what data can the client query.
export const typeDefs = `#graphql
 type Game {
    id: ID!
    title: String!
    platform: [String!]!
 }
 type Review{
    id: ID!
    rating: Int!
    content: String!
 }
 type Author{
    id: ID!
    name: String!
    verified: Boolean!
 }
 type Query{
    reviews: [Review]
    games: [Game]
    authors: [Author]
 }
`