import {StatusCodes} from "http-status-codes";

export function ProcessStatusMiddleware() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      const result = await originalMethod.apply(this, args);
      switch (result) {
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
    };
  };
}
