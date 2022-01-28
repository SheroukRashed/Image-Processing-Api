"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imagePreviewRule = exports.imagePreviewValidator = void 0;
var express_validator_1 = require("express-validator");
var fileslist = ['encenadaport', 'fjord', 'icelandwaterfall', 'palmtunnel', 'santamonica'];
var imagePreviewRule = function () { return [
    (0, express_validator_1.query)('filename')
        .exists()
        .withMessage('Image file name must be specified in the url')
        .isIn(fileslist)
        .withMessage("Image file must be one of these files: ".concat(__spreadArray([], fileslist, true)))
]; };
exports.imagePreviewRule = imagePreviewRule;
var imagePreviewValidator = function (req, res, next) {
    var errorFormatter = function (_a) {
        var msg = _a.msg;
        return "".concat(msg);
    };
    var errors = (0, express_validator_1.validationResult)(req).formatWith(errorFormatter);
    if (errors.isEmpty()) {
        return next();
    }
    return res.status(400).render('original', {
        original: false,
        status: 'Error while previewing the image',
        error: errors.array({ onlyFirstError: true })
    });
};
exports.imagePreviewValidator = imagePreviewValidator;
//# sourceMappingURL=imagePreviewValidator.js.map