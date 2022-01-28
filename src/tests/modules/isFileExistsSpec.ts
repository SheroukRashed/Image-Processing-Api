import path from 'path'
import isFileExists from '../../modules/isFileExists'

describe('test isFileExists function', () => {
  const filePath: string = path.join(
    __dirname,
    `../../../build/public/thumbnails/encenadaport_500_500.jpg`
  )
  const notFoundPath: string = path.join(
    __dirname,
    `../../../build/public/thumbnails/notFound_500_500.jpg`
  )

  it('should get true when requesting a file that exists', () => {
    const fileExists = isFileExists(filePath)
    expect(fileExists).toBeTrue()
  })

  it("should get false when requesting a file that doesn't exist", () => {
    const fileExists = isFileExists(notFoundPath)
    expect(fileExists).toBeFalse()
  })
})
