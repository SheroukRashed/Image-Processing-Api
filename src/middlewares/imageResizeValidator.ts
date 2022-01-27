import { query, ValidationError, validationResult } from 'express-validator'
import express from 'express'

const fileslist = ['encenadaport', 'fjord', 'icelandwaterfall', 'palmtunnel', 'santamonica']

const maximumFileWidth = 1920
const maximumFileHeight = 1280

const minimumFileWidth = 20
const minimumFileHeight = 20

const imageResizeRule = () => [
  query('filename')
    .exists()
    .withMessage('Image file name must be specified in the url')
    .isIn(fileslist)
    .withMessage(`Image file must be one of these files: ${[...fileslist]}`),
  query('width')
    .exists()
    .withMessage('Image width must be specified in the url')
    .toInt()
    .isInt({ max: maximumFileWidth, min: minimumFileWidth })
    .withMessage(
      `Image width must be a number with maximum value = ${maximumFileWidth} and minimum value = ${minimumFileWidth}`
    ),
  query('height')
    .exists()
    .withMessage('Image height must be specified in the url')
    .toInt()
    .isInt({ max: maximumFileHeight, min: minimumFileHeight })
    .withMessage(
      `Image height must be a number with maximum value = ${maximumFileHeight} and minimum value = ${minimumFileHeight}`
    )
]

const imageResizeValidator = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {
  const errorFormatter = ({ msg }: ValidationError) => `${msg}`
  const errors = validationResult(req).formatWith(errorFormatter)
  if (errors.isEmpty()) {
    next()
  } else {
    res.json({
      status: 'Error while previewing the image',
      errors: errors.array({ onlyFirstError: true })
    })
  }
}

export { imageResizeValidator, imageResizeRule }
