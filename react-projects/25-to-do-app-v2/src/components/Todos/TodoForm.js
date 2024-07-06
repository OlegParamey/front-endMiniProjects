//import Button from '../UI/Button'
import styles from './TodoForm.module.css'
import { useState } from 'react'

function TodoForm({ addTodo }) {
  const [inputText, setInputText] = useState('')

  function onSubmitHandle(event) {
    event.preventDefault()
    if (inputText && inputText.replace(/\s/g, '').length !== 0) {
      addTodo(inputText)
    }
    setInputText('')
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandle}>
        <input
          placeholder="Enter new Todo"
          value={inputText}
          onChange={(char) => setInputText(char.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default TodoForm
