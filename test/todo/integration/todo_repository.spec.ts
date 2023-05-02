import {TodoInMemory} from "../../../src"
import {TodoMother} from "../stubs"

describe('TodoRepository', () => {
  let repository: TodoInMemory
  const todo1 = TodoMother.random()
  const todo2 = TodoMother.random()

  beforeEach(() => {
    repository = new TodoInMemory([todo1, todo2])
  })

  describe('Create Todo', () => {

    it('should add a new todo to the context', async () => {
      // Arrange
      const newTodo = TodoMother.random()

      // Act
      await repository.createTodo(newTodo)

      // Assert
      const todo = await repository.getTodoById(newTodo.todoId)
      expect(todo.isOk()).toBe(true)
      expect(todo.unwrap().todoId.value).toBe(newTodo.todoId.value)
    })

    it('should return error if throw exception', async () => {
      // Act
      const result =  await repository.createTodo(todo1)

      // Assert
      expect(result.isErr()).toBe(true)
    })
  })
})
