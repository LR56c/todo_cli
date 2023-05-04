import {Command, Positional} from 'nestjs-command'
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

@Injectable()
export class CreateTodoCommand {
  constructor(private todoCreator: TodoCreator) {
  }

  @Command({
    command: 'create <title>',
    describe: 'create a todo',
  })
  async create(
    @Positional({
      name: 'title',
      describe: 'title of the todo',
      type: 'string',
    }) title: string,
  ) {
    // recibir parametros y validar tipo solamente
    try {
      this.ensureParams(title)
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
