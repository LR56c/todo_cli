import {CliUtilityService, Question, QuestionSet} from "nest-commander";

@QuestionSet({name: 'try-questions'})
export class TryQuestions {
  @Question({
    message: 'Rename title todo:',
    name: 'title',
    type: 'input',
  })
  parseTitle(val: string) {
    return val;
  }

  @Question({
    message: 'Completed todo?',
    name: 'completed',
    type: 'confirm',
  })
  parseCompleted(val: string) {
    return new CliUtilityService().parseBoolean(val.toLowerCase())
  }
}
