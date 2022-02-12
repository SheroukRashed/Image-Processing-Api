import resizeImage from '../../controllers/imageProcessorConroller'

describe('test resizeImage function', (): void => {
  it('should not throw an error when resizeImage', async (): Promise<void> => {
    expect(async () => {
      await resizeImage('encenadaport', 100, 100)
    }).not.toThrow()
  })
})
