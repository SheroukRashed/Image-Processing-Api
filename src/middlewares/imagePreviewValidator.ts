import { query, ValidationError, validationResult } from 'express-validator'
import express, { NextFunction } from 'express'

const fileslist = ['encenadaport', 'fjord', 'icelandwaterfall', 'palmtunnel', 'santamonica']

const imagePreviewRule = () => [
  query('filename')
    .exists()
    .withMessage('Image file name must be specified in the url')
    .isIn(fileslist)
    .withMessage(`Image file must be one of these files: ${[...fileslist]}`)
]

const imagePreviewValidator = (req: express.Request, res: express.Response, next: NextFunction) => {
  const errorFormatter = ({ msg }: ValidationError) => `${msg}`
  const errors = validationResult(req).formatWith(errorFormatter)
  if (errors.isEmpty()) {
    return next()
  }
  return res.status(400).render('original', {
    original: false,
    status: 'Error while previewing the image',
    error: errors.array({ onlyFirstError: true })
  })
}

export { imagePreviewValidator, imagePreviewRule }
