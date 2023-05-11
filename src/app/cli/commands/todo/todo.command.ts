import {Command, CommandRunner} from "nest-commander";
import {CreateTodoCommand} from "./create";
import {DeleteTodoCommand} from "./delete";
import {UpdateTodoCommand} from "./update";
import {FindTodoCommand} from "./find";
import {FindAllTodoCommand} from "./findAll";

@Command({
  name: 'todo',
  subCommands: [CreateTodoCommand, DeleteTodoCommand, UpdateTodoCommand, FindTodoCommand, FindAllTodoCommand],
})
export class TodoCommand extends CommandRunner {
  async run(passedParams: string[], options?: Record<string, any>): Promise<void> {
    this.command.outputHelp()
  }}
