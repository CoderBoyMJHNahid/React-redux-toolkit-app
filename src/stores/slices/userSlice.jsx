import { createSlice } from "@reduxjs/toolkit";

const userSlices = createSlice({
    name: "Users",
    initialState: [],
    reducers:{
        addUser(state,action){
            state.push(action.payload);
        },
        removeUser(state,action){
            state.splice(action.payload,1);
        },
        clearAllUsers(state,action){
            return [];
        }
    }
});

export default userSlices.reducer;

export const {addUser,removeUser,clearAllUsers} = userSlices.actions;