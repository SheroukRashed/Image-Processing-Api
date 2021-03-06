"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var imageProcessorConroller_1 = __importDefault(require("./controllers/imageProcessorConroller"));
var isFileExists_1 = __importDefault(require("./modules/isFileExists"));
var logger_1 = __importDefault(require("./middlewares/logger"));
var imagePreviewValidator_1 = require("./middlewares/imagePreviewValidator");
var imageResizeValidator_1 = require("./middlewares/imageResizeValidator");
var app = (0, express_1.default)();
var port = 3000;
var publicPath = '/public';
var viewsPath = '/views';
// Configure server
app.use(express_1.default.static(path_1.default.join(__dirname, publicPath)));
app.set('views', path_1.default.join(__dirname, viewsPath));
app.set('view engine', 'ejs');
app.get('/preview', (0, imagePreviewValidator_1.imagePreviewRule)(), imagePreviewValidator_1.imagePreviewValidator, logger_1.default, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var imageFile;
    return __generator(this, function (_a) {
        imageFile = req.query.filename;
        try {
            res.status(200).render('original', {
                original: "".concat(imageFile, ".jpg"),
                error: false
            });
        }
        catch (error) {
            throw new Error("Error ".concat(error.message));
        }
        return [2 /*return*/];
    });
}); });
app.get('/resize', (0, imageResizeValidator_1.imageResizeRule)(), imageResizeValidator_1.imageResizeValidator, logger_1.default, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var imageFile, imageWidth, imageHeight, processedImageFilePath;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                imageFile = req.query.filename;
                imageWidth = req.query.width;
                imageHeight = req.query.height;
                processedImageFilePath = path_1.default.join(__dirname, publicPath, "thumbnails/".concat(imageFile, "_").concat(imageWidth, "_").concat(imageHeight, ".jpg"));
                if (!!(0, isFileExists_1.default)(processedImageFilePath)) return [3 /*break*/, 2];
                return [4 /*yield*/, (0, imageProcessorConroller_1.default)(imageFile, imageWidth, imageHeight)];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                try {
                    res.status(200).render('thumbnail', {
                        thumbnail: "".concat(imageFile, ".jpg"),
                        width: "".concat(imageWidth),
                        height: "".concat(imageHeight),
                        error: false
                    });
                }
                catch (error) {
                    throw new Error("Error ".concat(error.message));
                }
                return [2 /*return*/];
        }
    });
}); });
app.listen(port, function () {
    console.log("listening to port number ".concat(port));
});
exports.default = app;
//# sourceMappingURL=index.js.map