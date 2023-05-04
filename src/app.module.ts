import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {PrismaModule, PrismaService} from 'nestjs-prisma';
import registerConfig from '../config';
import {CreateTodoCommand, TodoService} from "./app";
import {TodoCreator, TodoInMemory} from "./lib";

@Module({
  imports: [
    ConfigModule.forRoot({load: [registerConfig]}),
    PrismaModule.forRoot()
  ],
  controllers: [],
  providers: [
    // TODO: todo lo relacionado a injectar cosas de todo context, deberia tener su modulo para importarlo
    CreateTodoCommand,
    PrismaService,
    {
      provide: TodoService,
      // useFactory: (context: PrismaService) => new TodoService(new TodoPrismaService(context)),
      // inject: [PrismaService],
      useFactory: () => new TodoService(new TodoInMemory([])),
    },
    {
      provide: TodoCreator,
      useFactory: (context: TodoService) => new TodoCreator(context),
      inject: [TodoService],
    },
    ],
})
export class AppModule {
}
