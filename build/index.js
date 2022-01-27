"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import { promises as fsPromises } from 'fs'
// import { Buffer } from 'buffer'
var logger_1 = __importDefault(require("./middlewares/logger"));
// import { imagePreviewValidator, imagePreviewRule } from './middlewares/imagePreviewValidator'
var app = (0, express_1.default)();
var port = 3000;
var imagesPath = '/images';
// Configure server
app.use(express_1.default.static(imagesPath));
app.set('view engine', 'ejs');
// const readFullImage = async () => {
//   const buffer = Buffer.alloc(6000)
//   const fullImagePath = `${imagesPath}/encenadaport.jpg`
//   const fullImageFile = await fsPromises.open(fullImagePath, 'a+')
//   await fullImageFile.read(buffer, 0, 6000)
//   console.log(fullImageFile)
// }
app.get('/preview', logger_1.default, function (req, res) {
    var imageFile = req.query.filename;
    // const imageWidth: string = req.query.width as string
    // const imageHeight: string = req.query.height as string
    // res.send(
    //   `imageFile is ${imageFile} and its width is ${imageWidth} and it's height is ${imageHeight}`
    // )
    try {
        res.render('original', {
            original: "".concat(imageFile, ".jpg"),
            error: false
        });
    }
    catch (error) {
        res.render('original', {
            original: false,
            error: error
        });
    }
});
app.listen(port, function () {
    console.log("listening to port number ".concat(port));
});
exports.default = app;
//# sourceMappingURL=index.js.map