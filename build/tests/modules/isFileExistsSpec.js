"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var isFileExists_1 = __importDefault(require("../../modules/isFileExists"));
describe('test isFileExists function', function () {
    var filePath = path_1.default.join(__dirname, "../../../build/public/thumbnails/encenadaport_500_500.jpg");
    var notFoundPath = path_1.default.join(__dirname, "../../../build/public/thumbnails/notFound_500_500.jpg");
    it('should get true when requesting a file that exists', function () {
        var fileExists = (0, isFileExists_1.default)(filePath);
        expect(fileExists).toBeTrue();
    });
    it("should get false when requesting a file that doesn't exist", function () {
        var fileExists = (0, isFileExists_1.default)(notFoundPath);
        expect(fileExists).toBeFalse();
    });
});
//# sourceMappingURL=isFileExistsSpec.js.map