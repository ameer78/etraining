import { createSlice } from '@reduxjs/toolkit'

export const toDoSlice = createSlice({
  name: 'todo',
  initialState: {
    todoList: []
  },
  reducers: {
    addToDo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.todoList = [action.payload, ...state.todoList];
    },
    updateToDo: (state, action) => {
        state.todoList = state.todoList.map((item) => {
            if(item.id === action.payload.id){
                item = {...item, ...action.payload}
            }
            return item;
        })
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter((item)=> item.id !== action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToDo, deleteTodo, updateToDo } = toDoSlice.actions

export default toDoSlice.reducer