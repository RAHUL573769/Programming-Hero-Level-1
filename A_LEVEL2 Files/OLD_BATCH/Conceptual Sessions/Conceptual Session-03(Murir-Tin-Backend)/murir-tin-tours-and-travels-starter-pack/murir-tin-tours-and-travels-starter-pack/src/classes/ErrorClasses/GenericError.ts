/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
class GenericError extends Error {
  public statusCode: number
  constructor(message: string, Code: number) {
    super(message)

    this.statusCode = Code
    Error.captureStackTrace(this, this.constructor)
  }
}
export default GenericError
