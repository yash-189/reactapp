import { configureStore } from '@reduxjs/toolkit'
import RandomNum from './reducers/RandomNum'

const store = configureStore({
    reducer: {
        RandomNum: RandomNum
        
    }
  })

  export default store;