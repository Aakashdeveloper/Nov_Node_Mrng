const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const port = 8700;
const app = express();
const schema = require('./Schema/schema');

app.use(
    '/graphql',
    graphqlHTTP({
        schema:schema,
        graphiql:true
    })
)

app.listen(port,() => {
    console.log(`App is running on port ${port}`)
})