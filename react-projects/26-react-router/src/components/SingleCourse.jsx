import { Link, useNavigate, useParams } from 'react-router-dom'
import courses from '../data/courses'
import { useEffect } from 'react'

function SinglePageCourse() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const currentCourse = courses.find((obj) => obj.slug === slug)

  useEffect(() => {
    if (!currentCourse) {
      navigate('..', { relative: 'path' })
    }
  }, [currentCourse, navigate])

  return (
    <>
      <h1>{currentCourse?.title}</h1>
      <h2>{currentCourse?.slug}</h2>
      <h3>{currentCourse?.id}</h3>
      <Link to=".." relative="path">
        All Courses
      </Link>
    </>
  )
}

export default SinglePageCourse
