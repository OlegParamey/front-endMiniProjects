import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList({ todos, todoDeleteFunc }) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo, index) => (
        <Todo
          key={index}
          todo={todo}
          index={index}
          todoDeleteFunc={todoDeleteFunc}
        />
      ))}
    </div>
  )
}

export default TodoList
