import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosActions from './components/Todos/TodosActions'

function App() {
  const [todos, setTodos] = useState([])

  function addTodoHandler(text) {
    const newTodo = {
      text,
      isComplited: false,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
  }

  function deleteTodoHandler(elementIndex) {
    setTodos(todos.filter((obj) => obj.id !== elementIndex))
  }

  function toggleTodoHandler(id) {
    setTodos(
      todos.map((obj) => {
        return obj.id === id
          ? { ...obj, isComplited: !obj.isComplited }
          : { ...obj }
      })
    )
  }

  function resettodoHandler() {
    setTodos([])
  }

  function deleteCompletedTodoHandler() {
    setTodos(todos.filter((obj) => !obj.isComplited))
  }

  const completedTodosCount = todos.filter((obj) => obj.isComplited).length

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          completedTodosExist={!!completedTodosCount}
          resetTodos={resettodoHandler}
          deleteCompletedTodos={deleteCompletedTodoHandler}
        />
      )}
      <TodoList
        todos={todos}
        todoDeleteFunc={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodosCount > 0 && (
        <h2>{`You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? 'todos' : 'todo'
        }`}</h2>
      )}
    </div>
  )
}

export default App
