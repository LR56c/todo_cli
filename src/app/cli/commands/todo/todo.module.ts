import {Module} from '@nestjs/common';
import {CreateTodoCommand} from "./create-todo.command";
import {TodoService} from "../../services";
import {TodoCreator, TodoInMemory} from "../../../../lib";
import {DeleteTodoCommand} from "./delete-todo.command";

@Module({
  providers: [
    CreateTodoCommand,
    DeleteTodoCommand,
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
  exports: [TodoModule],
})
export class TodoModule {
}
