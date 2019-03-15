"use strict";
exports.__esModule = true;
var graphql_yoga_1 = require("graphql-yoga");
var schemas_1 = require("./schemas");
var server = new graphql_yoga_1.GraphQLServer({
    typeDefs: schemas_1.typeDefs,
    resolvers: schemas_1.resolvers
});
server.start(function () { return console.log('Server chatty is running ....'); });
