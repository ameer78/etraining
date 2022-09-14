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
        state.todoList = state.todoList.map((item, index) => {
            if(index === action.index){
                item = {...action.data, ...item}
            }
            return item;
        })
    },
    deleteTodo: state => {
      state.todoList.pop();
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToDo, deleteTodo, updateToDo } = toDoSlice.actions

export default toDoSlice.reducer