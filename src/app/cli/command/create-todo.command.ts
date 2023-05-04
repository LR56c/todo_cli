import {Injectable} from '@nestjs/common'
import {StatusCodes} from "http-status-codes"
import {
  CreatedAt,
  ProcessStatusMiddleware,
  TodoCompleted,
  TodoCreator,
  TodoId,
  TodoTitle,
  UpdatedAt
} from "../../../lib"
import {v4 as uuid} from "uuid"
import {z} from "zod";
import {Command, CommandRunner} from "nest-commander";

@Command({
  name: 'create',
  arguments: '<title>',
  description: 'Create a todo',
})
export class CreateTodoCommand extends CommandRunner {
  constructor(private todoCreator: TodoCreator) {
    super()
  }

  async run(inputs: string[], options: Record<string, any>): Promise<void> {
    // recibir parametros y validar tipo solamente
    try {
      this.ensureParams(inputs[0])
      const result = await this.todoCreator.execute(
        new TodoId(uuid()),
        new TodoTitle('title'),
        new TodoCompleted(false),
        new CreatedAt(new Date()),
        new UpdatedAt(new Date(), new Date()))

      result.unwrap()
      ProcessStatusMiddleware(StatusCodes.OK)
    } catch (e) {
      // console.log(e)
      ProcessStatusMiddleware(StatusCodes.BAD_REQUEST)
    }

    // Metodo 1: lanzar process code
    // await new ProcessStatusMiddleware().handle(StatusCodes.OK)

    // Metodo 2: lanzar cmd
    // pero sin colocar console.log como accion final o reaccion a evento, dentro del comando, ya que bota test
    // spawn(inputs[0], {
    //   shell: true
    // })

    // Metodo extra: lanzar excepciones, pero al hacerlo, involucra meter dominio especifico
    // Opciones:
    // - lanzar excepciones en comando y transformarlos a process code
    // - recibir de either excepcion de dominio y transformarlos a process code
  }

  private ensureParams(title: string): void {
    z.string().parse(title)
  }
}
