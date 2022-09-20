import { createSlice } from '@reduxjs/toolkit'

export const teamsSlice = createSlice({
  name: 'team',
  initialState: {
    teams: []
  },
  reducers: {
    addTeam: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.teams = [action.payload, ...state.teams];
    },
    updateTeam: (state, action) => {
        state.teams = state.teams.map((item) => {
            if(item.id === action.payload.id){
                item = {...item, ...action.payload}
            }
            return item;
        })
    },
    deleteTeam: (state, action) => {
      state.teams = state.teams.filter((item)=> item.id !== action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { addTeam, deleteTeam, updateTeam } = teamsSlice.actions

export default teamsSlice.reducer