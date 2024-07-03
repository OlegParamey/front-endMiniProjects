import './Post.css'

function Post({ userId, id, title, body }) {
  return (
    <div className="post">
      <h1>
        {userId}.{id} - {title}
      </h1>
      <p>{body}</p>
    </div>
  )
}

export default Post
