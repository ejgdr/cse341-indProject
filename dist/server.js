var express = require('express');
var graphqlHTTP = require('express-graphql').graphqlHTTP;
var _a = require('./schema'), schema = _a.schema, resolver = _a.resolver;
var envs = require('./envs');
var app = express();
app.use(express.json());
app.use(envs.graphqlPath, graphqlHTTP(function (request, response, graphQLParams) { return ({
    schema: schema,
    rootValue: resolver,
    graphiql: true,
    context: {
        request: request,
        response: response
    }
}); }));
app.listen(envs.port, function () {
    console.log("Server is running at http://localhost:".concat(envs.port, " ").concat(envs.graphqlPath));
});
var db = require('./db').db;
db.once('open', function () {
    console.log('Connected to MongoDB');
});
db.on('error', function (err) {
    console.log('Error connecting to MongoDB', err);
    process.exit(1);
});
