
import { Command } from 'nestjs-command';
import {Injectable} from '@nestjs/common';
import { TodoService } from '../services';
import {StatusCodes} from "http-status-codes";
@Injectable()
export class CreateTodoCommand {
    constructor(private todoService: TodoService) {}

    @Command({
        command: 'create',
        describe: 'create a user',
    })
    @ProcessStatusMiddleware()
    async create() {
        // 1recibir parametros y validar tipo solamente
        // const result = await new CreateTodo(this.todoService).execute(
        //     new TodoId(uuid()),
        //     new TodoTitle('title'),
        //     new TodoCompleted(false),
        //     new CreatedAt(new Date()),
        //     new UpdatedAt(new Date(), new Date()))

        process.exit(10)

        try {
            // throw new GoneException();
            // return good code
            return await StatusCodes.CREATED
        }
        catch (e) {
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

function ProcessStatusMiddleware() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = async function (...args: any[]) {
            const result = await originalMethod.apply(this, args);
            console.log(`Result: ${result}`);
        };
    };
}
