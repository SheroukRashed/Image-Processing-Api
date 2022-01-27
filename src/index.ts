import express, { Request, Response } from 'express'
import path from 'path'
// import { promises as fsPromises } from 'fs'
// import { Buffer } from 'buffer'

import logger from './middlewares/logger'
import { imagePreviewValidator, imagePreviewRule } from './middlewares/imagePreviewValidator'

const app = express()
const port = 3000
const publicPath = '/public'
const viewsPath = '/views'

// Configure server
app.use(express.static(path.join(__dirname, publicPath)))
app.set('views', path.join(__dirname, viewsPath))
app.set('view engine', 'ejs')
// const readFullImage = async () => {
//   const buffer = Buffer.alloc(6000)
//   const fullImagePath = `${imagesPath}/encenadaport.jpg`
//   const fullImageFile = await fsPromises.open(fullImagePath, 'a+')
//   await fullImageFile.read(buffer, 0, 6000)
//   console.log(fullImageFile)
// }

app.get(
  '/preview',
  imagePreviewRule(),
  imagePreviewValidator,
  logger,
  async (req: Request, res: Response) => {
    const imageFile: string = req.query.filename as string
    try {
      res.render('original', {
        original: `${imageFile}.jpg`,
        error: false
      })
    } catch (error) {
      throw new Error(`Error ${(error as Error).message}`)
    }
  }
)
app.listen(port, () => {
  console.log(`listening to port number ${port}`)
})

export default app
