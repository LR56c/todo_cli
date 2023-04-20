import {registerAs} from "@nestjs/config";

export default registerAs('config', () => ({
    DATABASE_USER: process.env.DATABASE_USER
}))
