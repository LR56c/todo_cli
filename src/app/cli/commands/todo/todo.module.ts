import {Module} from '@nestjs/common';
import {TodoService} from "../../services";
import {TodoCreator, TodoDelete, TodoFinder, TodoPrisma, TodosFinder, TodoUpdater} from "../../../../lib";
import {TodoCommand} from "./todo.command";
import {UpdateQuestions} from "./update";
import {TryCommand} from "./try.command";
import {PrismaService} from "nestjs-prisma";

const questionsTodo = [
  UpdateQuestions,
];

@Module({
  providers: [
    TryCommand,
    ...TodoCommand.registerWithSubCommands(),
    ...questionsTodo,
    PrismaService,
    {
      provide: TodoService,
      useFactory: (context: PrismaService) => new TodoService(new TodoPrisma(context)),
      inject: [PrismaService],
      // useFactory: () => new TodoService(new TodoInMemory([])),
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
