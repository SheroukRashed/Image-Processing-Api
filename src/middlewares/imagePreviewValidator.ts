import { query, ValidationError, validationResult } from 'express-validator'
import express from 'express'

const fileslist = ['encenadaport', 'fjord', 'icelandwaterfall', 'palmtunnel', 'santamonica']

const imagePreviewRule = () => [
  query('filename')
    .exists()
    .withMessage('Image file name must be specified in the url')
    .isIn(fileslist)
    .withMessage(`Image file must be one of these files: ${[...fileslist]}`)
]

const imagePreviewValidator = (
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

export { imagePreviewValidator, imagePreviewRule }
