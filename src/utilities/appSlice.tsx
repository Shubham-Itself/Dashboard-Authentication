import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
    name: 'authentication',
    initialState:{
        isLoggedIn : false
       
    },
    reducers:{
        setLog:(state , action )=>{
            state.isLoggedIn = action.payload;
              
        }
       
    }
});

export const { setLog } = appSlice.actions;   
export default appSlice.reducer;