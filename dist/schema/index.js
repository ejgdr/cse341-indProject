"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.schema = void 0;
var schema_1 = require("./schema");
var query_1 = require("./query");
var mutation_1 = require("./mutation");
var resolvers = __assign(__assign({}, query_1["default"]), mutation_1["default"]);
exports.schema = schema_1["default"];
