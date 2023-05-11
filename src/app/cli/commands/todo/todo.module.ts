import {Module} from '@nestjs/common';
import {TodoService} from "../../services";
import {TodoCreator, TodoDelete, TodoFinder, TodoInMemory, TodosFinder, TodoUpdater} from "../../../../lib";
import {TryCommand} from "./try-command";
import {TodoCommand} from "./todo.command";
import {TryQuestion1, TryQuestion2} from "./try-questions";

@Module({
  providers: [
    ...TodoCommand.registerWithSubCommands(),
    TryCommand,
    TryQuestion1,
    TryQuestion2,
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
    {
      provide: TodoDelete,
      useFactory: (context: TodoService) => new TodoDelete(context),
      inject: [TodoService],
    },
    {
      provide: TodoFinder,
      useFactory: (context: TodoService) => new TodoFinder(context),
      inject: [TodoService],
    },
    {
      provide: TodosFinder,
      useFactory: (context: TodoService) => new TodosFinder(context),
      inject: [TodoService],
    },
    {
      provide: TodoUpdater,
      useFactory: (context: TodoService) => new TodoUpdater(context),
      inject: [TodoService],
    },
  ],
  exports: [TodoModule],
})
export class TodoModule {
}
