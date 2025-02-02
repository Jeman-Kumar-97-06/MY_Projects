import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from '@apollo/server/standalone';
import { typeDefs } from "./schema.js";
import db from './_db.js';

const resolvers = {
    Query:{
        games(){
            return db.games; //--> db.games must be an array in which each object has an ID, title, and platform
                             //    just like we defined 'type Game' in schema.js
        },
        game(){
            return db.games.find((game)=>(game.id === game.id2))
        },
        authors(){
            return db.authors;
        },
        author(_,args){
            return db.authors.find((author)=>(author.id === author.id));
        },
        reviews(){
            return db.reviews;
        },
        review(_,args){
            return db.reviews.find((review)=> (review.id === args.id))
        }
    },
    Game: {
        reviews(parent){
            
        }
    }
}


//Server setup :
const server = new ApolloServer({
    typeDefs,    
    resolvers
});

const { url } = await startStandaloneServer(server,{
    listen:{port:4000}
});

console.log("Server ready at port 4000");

