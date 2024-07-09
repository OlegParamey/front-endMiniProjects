import { Link, useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import courses from '../data/courses'
import { useEffect } from 'react'

const Courses = () => {
  //location = {prop: "val"}
  const location = queryString.parse(useLocation().search)
  const navigate = useNavigate()
  let isSorted = false

  useEffect(() => {
    if (!Object.hasOwn(courses[0], `${location.sort}`)) {
      navigate('.', { relative: 'path' })
    }
  }, [location.sort, navigate])

  if (location.sort) {
    courses.sort((a, b) => {
      if (a[`${location.sort}`] < b[`${location.sort}`]) return -1
      if (a[`${location.sort}`] > b[`${location.sort}`]) return 1
      return 0
    })
    isSorted = true
  }
  console.log(courses)

  return (
    <>
      <h1>{isSorted ? `Courses sorted by ${location.sort}` : `Courses`}</h1>
      {courses.map((course) => (
        <div key={course.id}>
          <Link to={course.slug} className="courseLink">
            {course.title}
          </Link>
        </div>
      ))}
    </>
  )
}

export default Courses
