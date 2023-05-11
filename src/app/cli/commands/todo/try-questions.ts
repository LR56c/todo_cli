import {Question, QuestionSet} from "nest-commander";

@QuestionSet({name: 'try-question1'})
export class TryQuestion1 {
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

@QuestionSet({name: 'try-question2'})
export class TryQuestion2 {
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
