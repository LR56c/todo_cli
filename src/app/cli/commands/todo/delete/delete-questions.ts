import {Question, QuestionSet} from "nest-commander";

@QuestionSet({name: 'delete-questions'})
export class DeleteQuestions {
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
