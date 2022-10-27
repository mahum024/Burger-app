import { configureStore } from '@reduxjs/toolkit'
import ingredientReducer from '../features/ingredients/ingredientsSlice'

const store = configureStore({
  reducer: {
    ingredient: ingredientReducer
  }
})

export default store
