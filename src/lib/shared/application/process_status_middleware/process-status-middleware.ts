import {StatusCodes} from "http-status-codes";

export function ProcessStatusMiddleware(statusCode: StatusCodes) {
  switch (statusCode) {
    case StatusCodes.BAD_REQUEST:
      process.exit(5)
      break
    case StatusCodes.OK:
      process.exit(0)
      break
    default:
      process.exit(1)
      break
  }
}
