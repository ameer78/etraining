import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slices/counterSlice'
import toDoReducer from '../slices/todoSlice'
import Table from 'react-bootstrap/Table';

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo: toDoReducer
  }
})