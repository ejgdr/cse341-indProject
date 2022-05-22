"use strict";
exports.__esModule = true;
var connect_1 = require("./connect");
var books_1 = require("./books");
var dbUtils_1 = require("./dbUtils");
exports["default"] = {
    db: connect_1["default"],
    BookModel: books_1["default"],
    books: {
        getBookById: dbUtils_1.getBookById,
        getAllBooks: dbUtils_1.getAllBooks,
        createBook: dbUtils_1.createBook,
        updateBook: dbUtils_1.updateBook,
        deleteBook: dbUtils_1.deleteBook
    }
};
