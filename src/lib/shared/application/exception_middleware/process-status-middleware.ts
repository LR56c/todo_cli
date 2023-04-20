import { StatusCodes } from "http-status-codes";

export class ProcessStatusMiddleware {
  async handle(code : StatusCodes) {
    switch (code) {
      case StatusCodes.BAD_REQUEST:
        process.exit(5)
      case StatusCodes.OK:
        process.exit(200)
      default:
        process.exit(1)
    }
  }
}
