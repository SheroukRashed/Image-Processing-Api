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
exports.imageResizeRule = exports.imageResizeValidator = void 0;
var express_validator_1 = require("express-validator");
var fileslist = ['encenadaport', 'fjord', 'icelandwaterfall', 'palmtunnel', 'santamonica'];
var maximumFileWidth = 1920;
var maximumFileHeight = 1280;
var minimumFileWidth = 20;
var minimumFileHeight = 20;
var imageResizeRule = function () { return [
    (0, express_validator_1.query)('filename')
        .exists()
        .withMessage('Image file name must be specified in the url')
        .isIn(fileslist)
        .withMessage("Image file must be one of these files: ".concat(__spreadArray([], fileslist, true))),
    (0, express_validator_1.query)('width')
        .exists()
        .withMessage('Image width must be specified in the url')
        .toInt()
        .isInt({ max: maximumFileWidth, min: minimumFileWidth })
        .withMessage("Image width must be a number with maximum value = ".concat(maximumFileWidth, " and minimum value = ").concat(minimumFileWidth)),
    (0, express_validator_1.query)('height')
        .exists()
        .withMessage('Image height must be specified in the url')
        .toInt()
        .isInt({ max: maximumFileHeight, min: minimumFileHeight })
        .withMessage("Image height must be a number with maximum value = ".concat(maximumFileHeight, " and minimum value = ").concat(minimumFileHeight))
]; };
exports.imageResizeRule = imageResizeRule;
var imageResizeValidator = function (req, res, next) {
    var errorFormatter = function (_a) {
        var msg = _a.msg;
        return "".concat(msg);
    };
    var errors = (0, express_validator_1.validationResult)(req).formatWith(errorFormatter);
    if (errors.isEmpty()) {
        next();
    }
    else {
        res.json({
            status: 'Error while previewing the image',
            errors: errors.array({ onlyFirstError: true })
        });
    }
};
exports.imageResizeValidator = imageResizeValidator;
//# sourceMappingURL=imageResizeValidator.js.map