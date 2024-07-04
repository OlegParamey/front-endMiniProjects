import Post from './Post'
import ButtonPage from './ButtonPage'
import { useEffect, useState } from 'react'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

function Posts() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')
  const [cardId, setCardId] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((posts) => setPosts(posts))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false))
  }, [])

  const previousCard = () => {
    if (cardId > 0) {
      setCardId(cardId - 1)
    }
  }
  const nextCard = () => {
    if (cardId < posts.length - 1) {
      setCardId(cardId + 1)
    }
  }

  if (error) {
    return <h1>Error: {error}</h1>
  }

  return (
    <>
      <h1>Posts</h1>
      <hr />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="row">
          <div className="column">
            <ButtonPage onClick={previousCard} option="previous" />
          </div>

          <div className="column">
            <Post key={posts[cardId].id} {...posts[cardId]} />
          </div>

          <div className="column">
            <ButtonPage onClick={nextCard} option="next" />
          </div>
        </div>
      )}
    </>
  )
}
export default Posts
