import {Command, CommandRunner} from "nest-commander";
import {CreateTodoCommand} from "./create-todo.command";
import {DeleteTodoCommand} from "./delete-todo.command";
import {UpdateTodoCommand} from "./update-todo.command";

@Command({
  name: 'todo',
  subCommands: [CreateTodoCommand, DeleteTodoCommand, UpdateTodoCommand],
})
export class TodoCommand extends CommandRunner {
  async run(passedParams: string[], options?: Record<string, any>): Promise<void> {
    this.command.outputHelp()
  }}
