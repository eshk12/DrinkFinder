import { configureStore } from '@reduxjs/toolkit'
import cocktailReducer from '../actionSlice/cocktailSlice'

export default configureStore({
    reducer: {
        cocktail: cocktailReducer
    },
})