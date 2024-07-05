import styles from './Todo.module.css'

function Todo({ todo, index, todoDeleteFunc }) {
  return (
    <div className={styles.todo} onDoubleClick={() => todoDeleteFunc(index)}>
      <div className={styles.todoText}>{todo}</div>
    </div>
  )
}

export default Todo
