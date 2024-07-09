import { Link, useParams } from 'react-router-dom'
import courses from '../data/courses'

function SinglePageCourse() {
  const { slug } = useParams()
  const currentCourse = courses.find((obj) => obj.slug === slug)
  return (
    <>
      <h1>{currentCourse.title}</h1>
      <h2>{currentCourse.slug}</h2>
      <h3>{currentCourse.id}</h3>
      <Link to=".." relative="path">
        All Courses
      </Link>
    </>
  )
}

export default SinglePageCourse
