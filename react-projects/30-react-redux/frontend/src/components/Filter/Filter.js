import { useDispatch, useSelector } from 'react-redux'
import {
  setTitleFilter,
  resetFilters,
  selectTitleFilter,
} from '../../redux/slices/filterSlice'
import './Filter.css'

function Filter() {
  const dispatch = useDispatch()
  const titleFilter = useSelector(selectTitleFilter)

  function handleTitleFilterChange(e) {
    dispatch(setTitleFilter(e.target.value))
  }

  function handleResetFilters() {
    dispatch(resetFilters())
  }

  return (
    <div className="app-block filter">
      <h2>Filter</h2>
      <div className="filter-row">
        <div className="filter-group">
          <input
            onChange={handleTitleFilterChange}
            type="text"
            value={titleFilter}
            placeholder="Filter by title..."
          ></input>
        </div>
        <button onClick={handleResetFilters}>Reset Filters</button>
      </div>
    </div>
  )
}

export default Filter
