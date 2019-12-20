import express from 'express';
import express_graphql from 'express-graphql';
import schema from './schema';
import resolvers from './resolvers';


// Create an express server and a GraphQL endpoint
var app = express();

app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}));

app.listen(4000, () => {
  console.log('Express GraphQL Server Now Running On localhost:4000/graphql');
});

