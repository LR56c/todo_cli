import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {CommandModule} from 'nestjs-command';
import {PrismaModule, PrismaService} from 'nestjs-prisma';
import registerConfig from '../config';
import {CreateTodoCommand, TodoService} from "./app";
import {CreateTodo, TodoInMemory} from "./lib";

@Module({
  imports: [
    CommandModule,
    ConfigModule.forRoot({load: [registerConfig]}),
    PrismaModule.forRoot()
  ],
  controllers: [],
  providers: [
    // TODO: todo lo relacionado a injectar cosas de todo context, deberia tener su modulo para importarlo
    PrismaService,
    {
      provide: TodoService,
      // useFactory: (context: PrismaService) => new TodoService(new TodoPrismaService(context)),
      // inject: [PrismaService],
      useFactory: () => new TodoService(new TodoInMemory([])),
    },
    {
      provide: CreateTodo,
      useFactory: (context: TodoService) => new CreateTodo(context),
      inject: [TodoService],
    },
    CreateTodoCommand],
})
export class AppModule {
}
