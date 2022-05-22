"use strict";
exports.__esModule = true;
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports["default"] = {
    port: process.env.PORT || 3000,
    graphqlPath: process.env.GRAPHQL_PATH || '/graphql',
    dbUrl: process.env.DB_URL || 'mongodb://localhost:27017/graphql-starter'
};
