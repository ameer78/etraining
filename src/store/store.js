import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slices/counterSlice'
import toDoReducer from '../slices/todoSlice'
import teamsReducer from '../slices/teams'
import authReducer from '../slices/auth'
import messageReducer from '../slices/message'

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo: toDoReducer,
    auth: authReducer,
    message: messageReducer,
    teams: teamsReducer,
  }
})