import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])

  function addTodoHandler(text) {
    setTodos([...todos, text])
  }

  function deleteTodoHandler(elementIndex) {
    setTodos(todos.filter((_, index) => index !== elementIndex))
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} todoDeleteFunc={deleteTodoHandler} />
    </div>
  )
}

export default App
