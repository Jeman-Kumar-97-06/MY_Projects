//The '!' at the end tells, that field is required.
//The "type Query" object tells what data can the client query.
//The 'id' in "review(id:ID!): Review" is a query variable. 
export const typeDefs = `#graphql
 type Game {
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review!]
 }
 type Review{
    id: ID!
    rating: Int!
    content: String!
    game: Game!
    author: Author!
 }
 type Author{
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review]
 }
 type Query{
    reviews: [Review]
    review(id:ID!):Review
    games: [Game]
    game(id2:ID!):Game
    authors: [Author]
    author(id:ID!): Author
 }
`