"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var envs_1 = require("../envs");
mongoose_1["default"].connect(envs_1["default"].dbUrl);
exports["default"] = mongoose_1["default"].connection;
