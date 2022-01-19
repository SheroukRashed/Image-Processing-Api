import express from 'express';
import { promises as fsPromises } from 'fs';
import { Buffer } from 'buffer';

import logger from './utilities/logger';

const app = express();
const port = 3003;
const imagesPath = '../images';

const readFullImage = async () => {
    const buffer = Buffer.alloc(6000)
    const fullImagePath = `${imagesPath}/encenadaport.jpg`
    const fullImageFile = await fsPromises.open(fullImagePath, 'a+');
    await fullImageFile.read(buffer, 0, 6000);
    console.log(fullImageFile);
  }

app.get('/resize', logger, (req, res) => {
    readFullImage();
});
app.listen(port, () => {console.log(`listening to port number ${port}`)});