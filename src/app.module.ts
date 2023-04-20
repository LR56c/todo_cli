import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'nestjs-prisma';
import { TaskRunner, TodoService } from "./app";
import registerConfig from '../config';
@Module({
  imports: [
    ConfigModule.forRoot({ load: [registerConfig] }),
    PrismaModule.forRoot(),
  ],
  controllers: [],
  providers: [TaskRunner, TodoService],
})
export class AppModule {}
