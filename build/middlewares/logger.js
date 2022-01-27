"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger = function (req, res, next) {
    console.log("url ".concat(req.url, " was visited"));
    next();
};
exports.default = logger;
//# sourceMappingURL=logger.js.map