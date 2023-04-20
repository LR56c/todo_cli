import { spawn } from "child_process";
import { Command, CommandRunner } from "nest-commander";
import { ExceptionMiddleware } from "../../../lib";
import { StatusCodes } from "http-status-codes";
import { TodoService } from "../services";

@Command({
  name: 'my-exec',
  // arguments: '<task>',
  options: {isDefault: true}
})
export class TaskRunner extends CommandRunner {
  constructor(private todoService : TodoService) {
    super();
  }
  async run(inputs: string[], options: Record<string, string>): Promise<void> {
    // Metodo 1: lanzar process code
    // await new ExceptionMiddleware().handle(StatusCodes.OK)

    // Metodo 2: lanzar cmd
    // pero sin colocar console.log como accion final o reaccion a evento, dentro del comando, ya que bota test
    // spawn(inputs[0], {
    //   shell: true
    // });

    // Metodo extra: lanzar excepciones, pero al hacerlo, involucra meter dominio especifico
    // Opciones:
    // - lanzar excepciones en comando y transformarlos a process code
    // - recibir de either excepcion de dominio y transformarlos a process code
  }
}
