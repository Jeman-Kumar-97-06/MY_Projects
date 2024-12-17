require('dotenv').config();
const port    = process.env.PORT || 5000;
const express = require('express');
const schema  = require('./schema/schema');
const {graphqlHTTP} = require('express-graphql');
const app     = express();
//We are defining a router handler for '/graphql' route.
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:process.env.NODE_ENV === 'development'
}))
const cors    = require('cors');
