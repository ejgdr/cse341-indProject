"use strict";
exports.__esModule = true;
var graphql_1 = require("graphql");
var schema = (0, graphql_1.buildSchema)("\n    type Query {\n        books(limit: Int): [Book]\n        book(id: ID!): Book\n    }\n    type Mutation {\n        addBook(title: String!, author: String!, description: String!): BookResponse\n        updateBook(id: ID!, title: String, author: String, description: String): BookResponse\n        deleteBook(id: ID!): BookResponse\n    }\n    type Book {\n        _id: ID!\n        title: String!\n        author: String!\n        description: String!\n    }\n    type Books {\n        books: [Book]\n    }\n    type BookResponse {\n        data: Book\n        error: String\n        ok: Boolean\n    }\n");
exports["default"] = schema;
