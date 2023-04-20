import { StatusCodes } from "http-status-codes";

export class ExceptionMiddleware {
  async handle(code : StatusCodes) {
    switch (code) {
      case StatusCodes.BAD_REQUEST:
        process.exit(5)
      case StatusCodes.OK:
        process.exit(0)
      default:
        process.exit(1)
    }
  }
}
