import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
}

const filterSlice = createSlice({
  initialState,
  name: 'filter',
  reducers: {
    setTitleFilter: (state, action) => {
      //You can mutate state thanks to Immer Library:
      //state.title = action.payload

      //You can also return new state as usually
      return { ...state, title: action.payload }
    },
    resetFilters: (state) => {
      return initialState
    },
  },
})

export const { setTitleFilter, resetFilters } = filterSlice.actions

export const selectTitleFilter = (state) => state.filter.title

export default filterSlice.reducer
