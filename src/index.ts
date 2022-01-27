import express, { Request, Response } from 'express'
import path from 'path'

import resizeImage from './controller/imageProcessorConroller'
import logger from './middlewares/logger'
import { imagePreviewValidator, imagePreviewRule } from './middlewares/imagePreviewValidator'
import { imageResizeValidator, imageResizeRule } from './middlewares/imageResizeValidator'

const app = express()
const port = 3000
const publicPath = '/public'
const viewsPath = '/views'

// Configure server
app.use(express.static(path.join(__dirname, publicPath)))
app.set('views', path.join(__dirname, viewsPath))
app.set('view engine', 'ejs')

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

app.get(
  '/resize',
  imageResizeRule(),
  imageResizeValidator,
  logger,
  async (req: Request, res: Response) => {
    const imageFile: string = req.query.filename as string
    const imageWidth: number = req.query.width as unknown as number
    const imageHeight: number = req.query.height as unknown as number

    await resizeImage(imageFile, imageWidth, imageHeight)

    try {
      res.render('thumbnail', {
        thumbnail: `${imageFile}.jpg`,
        width: `${imageWidth}`,
        height: `${imageHeight}`,
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
