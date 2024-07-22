import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  author: '',
  onlyFavorite: false,
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
    setAuthorFilter: (state, action) => {
      return { ...state, author: action.payload }
    },
    setOnlyFavorite: (state) => {
      return { ...state, onlyFavorite: !state.onlyFavorite }
    },
    resetFilters: () => {
      return initialState
    },
  },
})

export const {
  setTitleFilter,
  setAuthorFilter,
  resetFilters,
  setOnlyFavorite,
} = filterSlice.actions

export const selectTitleFilter = (state) => state.filter.title

export const selectAuthorFilter = (state) => state.filter.author

export const selectOnlyFavoriteFilter = (state) => state.filter.onlyFavorite

export default filterSlice.reducer
