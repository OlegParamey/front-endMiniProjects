import { useSelector, useDispatch } from 'react-redux'
import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs'
import {
  deleteBook,
  toggleFavorite,
  selectBooks,
} from '../../redux/slices/bookSlice'
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectOnlyFavoriteFilter,
} from '../../redux/slices/filterSlice'
import './BookList.css'

function BookList() {
  const books = useSelector(selectBooks)
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)
  const dispatch = useDispatch()

  function handleDeleteBook(id) {
    dispatch(deleteBook(id))
  }

  function handleToggleFavorite(id) {
    dispatch(toggleFavorite(id))
  }

  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase())

    const matchesAuthor = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase())

    const matcnesFavorite = onlyFavoriteFilter ? book.isFavorite : true

    return matchesTitle && matchesAuthor && matcnesFavorite
  })

  function highlightMatch(text, filter) {
    if (!filter) return text

    const regex = new RegExp(`(${filter})`, 'gi')

    return text.split(regex).map((substring, i) => {
      if (substring.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={i} className="highlight">
            {substring}
          </span>
        )
      }
      return substring
    })
  }

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No Books Aviable.</p>
      ) : (
        <ul>
          {filteredBooks.length === 0 ? (
            <p>Input data doesn't match any book.</p>
          ) : (
            filteredBooks.map((book, i) => (
              <li key={book.id}>
                <div className="book-info">
                  {++i}. {highlightMatch(book.title, titleFilter)}{' '}
                  <strong>{book.year || ''}</strong> by{' '}
                  <strong>{highlightMatch(book.author, authorFilter)}</strong> (
                  {book.source})
                </div>
                <div className="book-actions">
                  <span onClick={() => handleToggleFavorite(book.id)}>
                    {book.isFavorite ? (
                      <BsBookmarkStarFill className="star-icon" />
                    ) : (
                      <BsBookmarkStar className="star-icon" />
                    )}
                  </span>

                  <button onClick={() => handleDeleteBook(book.id)}>
                    Delete
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  )
}

export default BookList
