import { createSlice } from '@reduxjs/toolkit'

// Create Reducer

export const questionReducer = createSlice({
  name: 'questions',
  initialState: {
    queue: [],
    answers: [],
    trace: 0,
  },
  reducers: {
    startGame: (state, action) => {
      return {
        state,
        queue: action.payload,
      }
    },
  },
})

export const { startGame } = questionReducer.actions

export default questionReducer.reducer
