import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";



const appStore = configureStore({
   reducer:{
    authentication: appSlice
   }
});


export default appStore