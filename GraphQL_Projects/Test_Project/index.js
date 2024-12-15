import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from '@apollo/server/standalone';
import { typeDefs } from "./schema.js";
import db from './_db';

const resolvers = {
    Query:{
        games(){
            return db.games; //--> db.games must be an array in which each object has an ID, title, and platform
                             //    just like we defined 'type Game' in schema.js
        },
        authors(){
            return db.authors;
        },
        reviews(){
            return db.reviews;
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

