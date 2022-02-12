import supertest from 'supertest'
import app from '../index'

describe('test preview endpoints', (): void => {
  it('should get the preview api', async (): Promise<void> => {
    const response = await supertest(app).get('/preview?filename=encenadaport')
    expect(response.status).toBe(200)
  })

  it("should get bad request for the preview api when request an image that doesn't exist", async (): Promise<void> => {
    const response = await supertest(app).get('/preview?filename=notFoundImage')
    expect(response.status).toBe(400)
  })

  it('should get bad request for the preview api when request without filename', async (): Promise<void> => {
    const response = await supertest(app).get('/preview')
    expect(response.status).toBe(400)
  })
})

describe('test resize endpoints', (): void => {
  it('should get the resize api', async (): Promise<void> => {
    const response = await supertest(app).get('/resize?filename=encenadaport&width=500&height=500')
    expect(response.status).toBe(200)
  })

  it("should get bad request for the resize api when request an image that doesn't exist", async (): Promise<void> => {
    const response = await supertest(app).get('/resize?filename=notFoundImage&width=500&height=500')
    expect(response.status).toBe(400)
  })

  it('should get bad request for the resize api when request without filename', async (): Promise<void> => {
    const response = await supertest(app).get('/resize?width=500&height=500')
    expect(response.status).toBe(400)
  })

  it('should get bad request for the resize api when request an image with width of type string', async (): Promise<void> => {
    const response = await supertest(app).get(
      '/resize?filename=encenadaport&width=width&height=500'
    )
    expect(response.status).toBe(400)
  })

  it('should get bad request for the resize api when request without width', async (): Promise<void> => {
    const response = await supertest(app).get('/resize?filename=encenadaport&height=500')
    expect(response.status).toBe(400)
  })

  it('should get bad request for the resize api when request an image with height of type string', async (): Promise<void> => {
    const response = await supertest(app).get(
      '/resize?filename=encenadaport&width=500&height=height'
    )
    expect(response.status).toBe(400)
  })

  it('should get bad request for the resize api when request without height', async (): Promise<void> => {
    const response = await supertest(app).get('/resize?filename=encenadaport&width=500')
    expect(response.status).toBe(400)
  })
})
