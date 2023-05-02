import {Command} from 'nestjs-command';
import {Injectable} from '@nestjs/common';
import {StatusCodes} from "http-status-codes";
import {TodoCreator, ProcessStatusMiddleware} from "../../../lib";

@Injectable()
export class CreateTodoCommand {
  constructor(private todoCreator: TodoCreator) {
  }

  @Command({
    command: 'create',
    describe: 'create a user',
  })
  @ProcessStatusMiddleware()
  async create() {
    // recibir parametros y validar tipo solamente
    // const result = await new CreateTodo(this.todoService).execute(
    //     new TodoId(uuid()),
    //     new TodoTitle('title'),
    //     new TodoCompleted(false),
    //     new CreatedAt(new Date()),
    //     new UpdatedAt(new Date(), new Date()))

    // console.log(this.todoCreator)

    try {
      // throw new GoneException();
      // return good code
      return await StatusCodes.OK
    } catch (e) {
      console.log('---------------');
      // return bad code
    }

    // Metodo 1: lanzar process code
    // await new ProcessStatusMiddleware().handle(StatusCodes.OK)

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
