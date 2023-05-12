import {Command, CommandRunner} from "nest-commander"
import {TodoService} from "../../services";

@Command({
  name: 'try',
  options: {
    isDefault: true
  }
})
export class TryCommand extends CommandRunner {
  constructor(private todoService: TodoService) {
    super()
  }

  async run(inputs: string[], options: Record<string, any>): Promise<void> {
    try {
      console.log('Try command')
    } catch (e) {
      console.log(e)
    }
  }
}
