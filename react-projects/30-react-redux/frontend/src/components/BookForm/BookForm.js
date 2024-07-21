import './BookForm.css'
import { useState } from 'react'

function BookForm() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (title && author) {
      //dispatch action
      setAuthor('')
      setTitle('')
    }
  }

  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  )
}

export default BookForm
