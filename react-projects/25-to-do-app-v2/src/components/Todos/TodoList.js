import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList({ todos, todoDeleteFunc, toggleTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((obj) => (
        <Todo
          key={obj.id}
          todo={obj}
          todoDeleteFunc={todoDeleteFunc}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  )
}

export default TodoList
