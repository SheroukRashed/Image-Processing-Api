import express from 'express'
import { promises as fsPromises } from 'fs'
import { Buffer } from 'buffer'

import logger from './middlewares/logger'

const app = express()
const port = 3000
const imagesPath = '../images'

// Configure server
  app.use(express.static(imagesPath))

// const readFullImage = async () => {
//   const buffer = Buffer.alloc(6000)
//   const fullImagePath = `${imagesPath}/encenadaport.jpg`
//   const fullImageFile = await fsPromises.open(fullImagePath, 'a+')
//   await fullImageFile.read(buffer, 0, 6000)
//   console.log(fullImageFile)
// }

app.get('/preview', logger, async (req, res) => {
  const imageFile: string = req.query.filename as string
  const imageWidth: string = req.query.width as string
  const imageHeight: string = req.query.height as string
  res.send(`imageFile is ${imageFile} and its width is ${imageWidth} and it's height is ${imageHeight}`);
})
app.listen(port, () => {
  console.log(`listening to port number ${port}`)
})
