"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var isFileExists = function (filename) {
    try {
        if (fs_1.default.existsSync(filename)) {
            return true;
        }
    }
    catch (error) {
        console.error("Error while checking file existence : ".concat(error));
    }
    return false;
};
exports.default = isFileExists;
//# sourceMappingURL=isFileExists.js.map