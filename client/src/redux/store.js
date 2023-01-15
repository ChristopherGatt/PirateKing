import { combinedReducers, configureStore } from '@reduxjs/toolkit'

/*Call Reducers*/
import questionReducer from './question_reducer'
import { resultReducer } from './result_reducer'

const rootReducer = combinedReducers({
  questions: questionReducer,
  result: resultReducer,
})

// Create Store
export default configureStore({ reducer: rootReducer })
