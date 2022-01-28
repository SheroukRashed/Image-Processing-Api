import sharp from 'sharp'
import path from 'path'
import fs from 'fs'

const originalImagesPath = path.join(__dirname, '../public/images')
const processedImagesPath = path.join(__dirname, '../public/thumbnails')

const resizeImage = async (filename: string, width: number, height: number): Promise<void> => {
  const originalImagePath = `${originalImagesPath}/${filename}.jpg`
  const processedImagePath = `${processedImagesPath}/${filename}_${width}_${height}.jpg`

  if (!fs.existsSync(processedImagesPath)) {
    fs.mkdirSync(processedImagesPath)
  }

  try {
    await sharp(originalImagePath).resize(width, height).toFile(processedImagePath)
  } catch (error) {
    throw new Error(`Error while processing the image : ${error}`)
  }
}

export default resizeImage
