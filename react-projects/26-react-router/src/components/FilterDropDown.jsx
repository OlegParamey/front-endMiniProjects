import { useNavigate } from 'react-router-dom'
import styles from './FilterDropDown.module.css'

function FilterDropDown({
  setSortKey,
  SORT_KEY,
  setSortedCourses,
  sortedCourses,
  sortCourses,
}) {
  const navigate = useNavigate()

  function handleFilterChange(key) {
    setSortedCourses(sortCourses(sortedCourses, key))
    setSortKey(key)
    navigate(`?sort=${key}`)
  }

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropbtn}>Filter by:</button>
      <div className={styles.dropdown_content}>
        {SORT_KEY.map((key) => (
          <button
            key={key}
            onClick={() => handleFilterChange(key)}
            className={styles.dropdown_item}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterDropDown
