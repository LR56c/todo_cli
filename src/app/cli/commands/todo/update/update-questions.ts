import {Question, QuestionSet} from "nest-commander";

@QuestionSet({name: 'update-question1'})
export class UpdateQuestion1 {
  @Question({
    message: 'What task would you like to execute?',
    name: 'task',
    choices: ['Create', 'Delete', 'Update', 'Find', 'FindAll'],
    type: 'list',
  })
  parseTask(val: string) {
    return val;
  }
}
