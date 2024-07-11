import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import queryString from 'query-string'
import courses from '../data/courses'
import FilterDropDown from './FilterDropDown'

const SORT_KEY = ['title', 'slug', 'id']

function sortCourses(courses, key) {
  const sortedCourses = [...courses]
  if (!key || !SORT_KEY.includes(key)) {
    return sortedCourses
  }
  sortedCourses.sort((a, b) => {
    if (a[key] < b[key]) return -1
    if (a[key] > b[key]) return 1
    return 0
  })
  return sortedCourses
}

const Courses = () => {
  //location = {prop: "val"}
  const location = queryString.parse(useLocation().search)
  const navigate = useNavigate()
  const [sortKey, setSortKey] = useState(location.sort)
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey)
  )

  useEffect(() => {
    if (!SORT_KEY.includes(sortKey)) {
      console.log(!SORT_KEY.includes(sortKey))
      setSortKey()
      setSortedCourses([...courses])
      navigate('.', { relative: 'path' })
    }
  }, [sortKey, navigate])

  return (
    <>
      <h1>{sortKey ? `Courses sorted by ${sortKey}` : `Courses`}</h1>
      <FilterDropDown
        setSortedCourses={setSortedCourses}
        sortCourses={sortCourses}
        setSortKey={setSortKey}
        sortedCourses={sortedCourses}
        SORT_KEY={SORT_KEY}
      />
      {sortedCourses.map((course) => (
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
